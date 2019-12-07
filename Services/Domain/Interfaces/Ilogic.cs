using Data.General.Context;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Linq.Expressions;

namespace Services.Domain.Interfaces
{
    public interface ILogic<T> where T : class
    {
        GeneralContext Context { get; }

        ObjectContext ObjectContext { get; }

        //IQueryable ObtenerLista(string[] includes = null);
        IQueryable ObtenerLista(string[] includes = null, Expression<Func<T, bool>> predicate = null);

        T ObtenerPorId(object key);
        T ObtenerPor(Expression<Func<T, bool>> predicate);

        void Actualizar(T e, object key);

        void Agregar(T e);

        void Borrar(T e);

        void GuardarCambios();

        int Cantidad
        {
            get;
        }

        string[] keyNames
        {
            get;
        }

        IQueryable Queryable();
        //dynamic GetValue(T e, string name);
    }
}
