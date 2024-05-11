const express = require('express');
const router = express.Router();
const Question = require('../models/question');
const User = require('../models/user');
const userService = require('../utils/user');
const commentsRouter = require('./comments');

router.use('/:questionId/comments/', (request, response, next) => {
  request.questionId = request.params.questionId;
  next();
}, commentsRouter);

router.post('/', async (request, response, next) => {
  try {
    const { body } = request;
    const user = await userService.isAuthenticated(request.cookies.token);

    if (user.error) {
      return response.status(401).json(user.error);
    }

    if (!body.title || !body.content) {
      return response.status(400).json({ error: 'Title and content must be provided' });
    }

    const newQuestion = new Question({
      title: body.title,
      filepath: body.filepath, // Assuming this is where you store the image path
      content: body.content,
      solved: false,
      likes: [{ value: 0 }],
      postedDate: new Date(),
      tags: body.tags ? body.tags : [],
      postedBy: user.id,
    });

    const question = await newQuestion.save();

    // Add the question to the user's questions
    user.questions.push(question._id);
    await User.findByIdAndUpdate(user.id, user);

    return response.status(201).json(question);
  } catch (error) {
    return next(error);
  }
});

router.put('/:id', async (request, response, next) => {
  try {
    const { body } = request;
    const { id } = request.params;
    const question = await Question.findById(id);

    if (!question) {
      return response.status(404).json({ error: 'Invalid question id' });
    }

    const user = await userService.isAuthenticated(request.cookies.token);
    if (user.error) {
      return response.status(401).json(user.error);
    }

    if (!body.title || !body.content) {
      return response.status(400).json({ error: 'Title and content must be provided' });
    }

    if (question.postedBy.toString() !== user._id.toString()) {
      return response.status(401).json({ error: 'Only authors can update questions' });
    }

    const updatedQuestion = {
      title: body.title,
      filepath: body.filepath, // Assuming this is where you store the image path
      content: body.content,
      solved: body.solved,
      tags: body.tags,
    };

    await Question.findByIdAndUpdate(id, updatedQuestion);

    return response.status(200).json(updatedQuestion);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
