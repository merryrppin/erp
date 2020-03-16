using Data.General.Context;
using Data.General.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Services.General
{
    public class AdministrationService
    {
        public GeneralContext _administrationContext;

        public AdministrationService()
        {
            _administrationContext = new GeneralContext();
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

        public User GetUser(int id)
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

        public bool UpdateUser(User user)
        {
            try
            {
                User userUpdate = _administrationContext.Users.Find(user);
                //Mapper.Map(viewModel, patient);
                //AutoMapper.Mapper.CreateMap<userUpdate, user>();
                userUpdate.UserEmail = user.UserEmail;
                userUpdate.UserFirstName = user.UserFirstName;
                userUpdate.UserLastName = user.UserLastName;
                userUpdate.Active = user.Active;
                _administrationContext.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        //public ClientViewModel GetById(int id)
        //{
        //    //Get the client
        //    var client = clients[0];
        //    //Define the mapping
        //    AutoMapper.Mapper.CreateMap<Client, ClientViewModel>();
        //    //Execute the mapping
        //    var clientViewModel = AutoMapper.Mapper.Map<Client, ClientViewModel>(client);
        //    //Return a viewmodel
        //    return clientViewModel;
        //}
        #endregion
    }
}