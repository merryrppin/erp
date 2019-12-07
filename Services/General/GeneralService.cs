using Data.General.Context;
using System;
using System.Transactions;

namespace Services.General
{
    public class GeneralService<T>
        where T : class, new()
    {
        public GeneralContext _generalContext;

        public GeneralService()
        {
            _generalContext = new GeneralContext();
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
                    TransactionOptions transactionOptions = new TransactionOptions
                    {
                        IsolationLevel = System.Transactions.IsolationLevel.ReadCommitted,
                        Timeout = TransactionManager.MaximumTimeout
                    };
                    //using (TransactionScope scope = new TransactionScope())
                    using (TransactionScope scope = new TransactionScope(TransactionScopeOption.Required, transactionOptions))
                    {
                        
                        _generalContext.SaveChanges();
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
