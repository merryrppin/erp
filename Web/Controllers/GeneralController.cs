using Data.Administration.Entities;
using Services.Administration;
using System.Collections.Generic;
using System.Web.Http;

namespace Web.Controllers
{
    public class GeneralController : ApiController
    {
        public AdministrationService _administrationService;
        public GeneralController()
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
    }
}
