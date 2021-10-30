const { User, Book } = require('../models');
const { findOneAndUpdate } = require('../models/User')
const { AuthenticationError } = require('apollo-Server-express')
const { signToken } = require('../utils/auth')