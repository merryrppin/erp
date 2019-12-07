using Data.General.Context;
using Services.Domain.Interfaces;
using System;
using System.Transactions;

namespace Services.General
{
    public class GeneralService<E, T>
        where E : ILogic<T>
        where T : class, new()
    {

        private E _entidad;
        protected ILogic<T> Entidad
        {
            get
            {
                return (ILogic<T>)_entidad;
            }
        }

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
                        Entidad.Agregar(item);
                        Entidad.GuardarCambios();
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
