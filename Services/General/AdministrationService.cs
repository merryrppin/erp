using Data.General.Context;
using Data.General.Entities;
using Newtonsoft.Json;
using Services.General.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Core.Objects;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using static Services.General.Enums.Enums;

namespace Services.General
{
    public class AdministrationService
    {
        public GeneralContext _administrationContext;

        public AdministrationService()
        {
            _administrationContext = new GeneralContext();
        }
        #region Stored Procedure
        public StoredObjectResponse ExecuteStoredProcedure(StoredObjectParams StoredObjectParams)
        {
            StoredObjectResponse StoredObjectResponse = new StoredObjectResponse();
            DataSet ds = new DataSet();
            using (SqlConnection con = new SqlConnection(_administrationContext.Database.Connection.ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand(StoredObjectParams.StoredProcedureName, con))
                {
                    try
                    {
                        cmd.CommandType = CommandType.StoredProcedure;

                        foreach (StoredParams StoredParam in StoredObjectParams.StoredParams)
                        {
                            cmd.Parameters.Add("@" + StoredParam.Name, TypeOfParameter(StoredParam.TypeOfParameter)).Value = StoredParam.Value;
                        }
                        con.Open();
                        SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                        adapter.Fill(ds);
                        StoredObjectResponse.Value = new List<StoredTableResponse>();
                        foreach (DataTable dataTable in ds.Tables)
                        {
                            List<string> columns = new List<string>();
                            foreach (DataColumn column in dataTable.Columns)
                            {
                                columns.Add(column.ColumnName);
                            }
                            List<List<string>> rows = new List<List<string>>();
                            foreach (DataRow rowsT in dataTable.Rows)
                            {
                                List<string> row = (rowsT.ItemArray as object[]).ToList().ConvertAll(input => input.ToString());
                                rows.Add(row);
                            }
                            StoredObjectResponse.Value.Add(new StoredTableResponse { TableName = dataTable.TableName, Columns = columns, Rows = rows });
                        }
                    }
                    catch (Exception ex)
                    {
                        StoredObjectResponse.Exception = ex;
                    }
                    finally
                    {
                        con.Dispose();
                        cmd.Dispose();
                    }
                }
            }
            return StoredObjectResponse;
        }

        private SqlDbType TypeOfParameter(int TypeOfParameter)
        {
            switch (TypeOfParameter)
            {
                case (int)EnumTypeOfParameter.StringType:
                    return SqlDbType.VarChar;
                case (int)EnumTypeOfParameter.IntType:
                    return SqlDbType.Int;
                case (int)EnumTypeOfParameter.BoolType:
                    return SqlDbType.Bit;
                case (int)EnumTypeOfParameter.DateType:
                    return SqlDbType.Date;
                default:
                    return SqlDbType.VarChar;
            }
        }
        #endregion
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