using Data.General.Context;
using Services.Domain.Interfaces;
using System;
using System.Transactions;

namespace Services.General
{
    public class GeneralService<T>
        where T : class, new()
    {
        public Domain.Logic.Base<T> Operations = new Domain.Logic.Base<T>();
        
        //private T _entidad;
        //protected<T> Entidad
        //{
        //    get
        //    {
        //        return ()_entidad;
        //    }
        //}

        //public GeneralContext _generalContext;

        public GeneralService()
        {
            //_generalContext = new GeneralContext();
            //Operations.Context.Set<GeneralContext>();
        }
        public bool AddNew(T item)
        {
           
            //Operations.Context.Entry(item);
            bool success = false;
            string error = string.Empty;
            //if (ModelState.IsValid)
            {
                try
                {
                    TransactionOptions transactionOptions = new TransactionOptions
                    {
                        IsolationLevel = System.Transactions.IsolationLevel.ReadCommitted,
                        Timeout = TransactionManager.MaximumTimeout
                    };
                    //using (TransactionScope scope = new TransactionScope())
                    using (TransactionScope scope = new TransactionScope(TransactionScopeOption.Required, transactionOptions))
                    {
                        Operations.Agregar(item);
                        Operations.GuardarCambios();
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
