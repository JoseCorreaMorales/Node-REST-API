const { UsersService } = require('./services');
const debug = require('debug')('app:module-users-controller');
const { Response } = require('../common/response');
const createError = require('http-errors');
/* Control all the routes defined in the index. */
module.exports.UsersController = {
    getUsers: async (req, res) => {
        try {
            let users = await UsersService.getAll();
            Response.success(res, users, "List of users", 200);
        } catch (error) {
            Response.error(res);
            debug(error)
        }
    },

    getUser: async (req, res) => {
        try {
            const { id } = req.params;
            let user = await UsersService.getById(id);
            if (!user) {
                Response.error(res, new createError.NotFound());
            } else {
                Response.success(res, user, `User with id ${id}`, 200);
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    createUser: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else {
                const insertedId = await UsersService.createUser(body);
                Response.success(res, insertedId, `User inserted with id ${insertedId}`, 201);
            }

        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
}