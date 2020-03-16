using Data.General.Entities;
using Services.General;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace Web.Controllers
{
    public class UserController : ApiController
    {
        public GeneralService<User> _generalService;
        public UserController()
        {
            _generalService = new GeneralService<User>();
        }

        [HttpPost]
        [Route("api/getAllUsers")]
        public List<User> GetAllUsers()
        {
            return null;// _generalService.GetAllUsers();
        }

        [HttpPost]
        [Route("api/addUser")]
        public bool AddUser(User user)
        {

            return _generalService.AddNew(user);
        }

        [HttpPost]
        [Route("api/getUser")]
        public User GetUser(User user)
        {
            return null;// _generalService.GetUser(user.UserId);
        }

    }
}