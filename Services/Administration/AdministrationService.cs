using Data.Administration.Context;
using Data.Administration.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Services.Administration
{
    public class AdministrationService
    {
        public AdministrationContext _administrationContext;

        public AdministrationService()
        {
            _administrationContext = new AdministrationContext();
        }
        #region User
        /// <summary>
        /// Este metodo devuelve todos los usuarios activos
        /// </summary>
        /// <returns></returns>
        public List<User> GetActiveUsers()
        {
            return _administrationContext.Users.Where(u => u.Active == true).ToList();
        }

        public List<User> GetAllUsers()
        {
            try
            {
                return _administrationContext.Users.ToList();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public User GetUser(string id)
        {
            try
            {
                return _administrationContext.Users.Where(IdObject => IdObject.UserId == id).FirstOrDefault();
            }
            catch (Exception)
            {
                return null;
            }
        }

        public bool AddUser(User user)
        {
            try
            {
                User userInsert = _administrationContext.Users.Add(user);
                _administrationContext.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
        #endregion
    }
}
