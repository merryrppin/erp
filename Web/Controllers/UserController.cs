using Data.General.Entities;
using Services.General;
using Services.General.Entities;
using System.Collections.Generic;
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
        [Route("api/login")]
        public Login Login(Login login)
        {
            return _administrationService.Login(login.login, login.password);
        }

        [HttpPost]
        [Route("api/logout")]
        public bool Logout(User user)
        {
            return _administrationService.UpdateUser(user);
        }
    }
}