using Data.General.Entities;
using Services.Domain.Interfaces;
using Services.Domain.Logic;
using Services.General;
using System.Collections.Generic;
using System.Web.Http;

namespace Web.Controllers
{
    public class GeneralController : ApiController
    {
        public GeneralService<BaseEntity, Base<BaseEntity>> _generalService;
        public GeneralController()
        {
            _generalService = new GeneralService<BaseEntity>();
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
