using Data.General.Entities;
using Services.General;
using Services.General.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace Web.Controllers
{
    public class UserController : ApiController
    {
        private AdministrationService _administrationService;
        public UserController()
        {
            _administrationService = new AdministrationService();
        }

        [HttpPost]
        [Route("api/getAllUsers")]
        public List<User> GetAllUsers()
        {
            return _administrationService.GetAllUsers();
        }

        [HttpPost]
        [Route("api/addUser")]
        public bool AddUser(User user)
        {
            return _administrationService.AddUser(user);
        }

        [HttpPost]
        [Route("api/getUser")]
        public User GetUser(User user)
        {
            return _administrationService.GetUser(user.UserId);
        }

        [HttpPost]
        [Route("api/updateUser")]
        public bool UpdateUser(User user)
        {
            return _administrationService.UpdateUser(user);
        }
        
        [HttpPost]
        [Route("api/executeStoredProcedure")]
        public StoredObjectResponse ExecuteStoredProcedure(StoredObjectParams StoredObjectParams)
        {
            return _administrationService.ExecuteStoredProcedure(StoredObjectParams);
        }
    }
}