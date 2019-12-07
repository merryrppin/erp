using Data.Administration.Context;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;

namespace Services.General
{
    public abstract class GeneralServices<T>
        where T : class, new()
    {
        public AdministrationContext _administrationContext;

        public GeneralServices()
        {
            _administrationContext = new AdministrationContext();
        }
        public bool AddNew(T item)
        {
            bool success = false;
            string error = string.Empty;
            //if (ModelState.IsValid)
            {
                try
                {


                    // AntesDeEjecutarTransaccion(item, null);


                    TransactionOptions transactionOptions = new TransactionOptions();
                    transactionOptions.IsolationLevel = System.Transactions.IsolationLevel.ReadCommitted;
                    transactionOptions.Timeout = TransactionManager.MaximumTimeout;

                    //using (TransactionScope scope = new TransactionScope())
                    using (TransactionScope scope = new TransactionScope(TransactionScopeOption.Required, transactionOptions))
                    {

                        _administrationContext.SaveChanges();
                        scope.Complete();
                        success = true;
                    }

                }
                catch (Exception ex)
                {
                    success = false;
                    //return base.SaveChanges();
                }

            }

            return success;
        }
    }
}
