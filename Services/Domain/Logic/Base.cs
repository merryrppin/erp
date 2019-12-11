using Data.General.Context;
using Services.Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Domain.Logic
{
    public class Base<E>  where E : class
    {

        protected GeneralContext db;
        protected DbSet<E> entidad;

        public Base()
        {
            db = new GeneralContext();
            entidad = db.Set<E>(); //establecer la entidad especifica (genéricamente hablando)
        }
        
        public DbSet<E> Entidad
        {
            get
            {
                return entidad;
            }
        }

        public GeneralContext Context
        {
            get
            {
                return db;
            }
        }

        public ObjectContext ObjectContext => throw new NotImplementedException();

        public int Cantidad => throw new NotImplementedException();

        public string[] keyNames => throw new NotImplementedException();

        public virtual IQueryable Queryable()
        {
            return entidad.AsQueryable();
        }

        public virtual IQueryable ObtenerLista(string[] includes = null, Expression<Func<E, bool>> predicate = null)
        {

            IQueryable result;

            if (predicate != null)
                result = entidad.AsQueryable().Where(predicate);
            else
                result = entidad.AsQueryable();

            if (includes != null)
            {
                foreach (var include in includes)
                {
                    result = result.Include(include);
                }
            }
            return result;
        }

        public virtual E ObtenerPorId(object key)
        {
            return entidad.Find(key);
            // return entidad.Where("it." + keyName + " = " + key.ToString()).FirstOrDefault();
        }


        public virtual E ObtenerPor(Expression<Func<E, bool>> predicate)
        {
            return entidad.Where(predicate).FirstOrDefault();
        }


        public virtual void Agregar(E e)
        {
            entidad.Add(e);
        }

        //public virtual void Actualizar(E e, object key)
        //{
        //    //if (e == null)
        //    //    throw new ArgumentException("Entidad nula.");

        //    var entrada = db.Entry(e);

        //    if (entrada.State == EntityState.Detached)
        //    {
        //        var entidadAlmacenada = entidad.Find(key); // buscar la entidad almacenada en la base de datos por el Id

        //        if (entidadAlmacenada != null)
        //        {
        //            //List<PropertyInfo> PropList = (from a in e.GetType().GetProperties()
        //            //                               where a.PropertyType.Name == "ICollection`1"
        //            //                               select a).ToList();
        //            //foreach (PropertyInfo prop in PropList)
        //            //{
        //            //    IEnumerable instance = (IEnumerable)prop.GetValue(e, null);
        //            //    foreach (var i in instance)
        //            //    {
        //            //        db.Entry(i).State = System.Data.Entity.EntityState.Modified;
        //            //    }
        //            //}

        //            entrada = db.Entry(entidadAlmacenada);
        //            entrada.CurrentValues.SetValues(e);
        //        }
        //        else
        //        {
        //            entrada.State = EntityState.Modified; // debe ser almacenada
        //        }

        //    }
        //}

        public virtual void Borrar(E e)
        {
            entidad.Remove(e);
        }

        public virtual void GuardarCambios()
        {
            db.SaveChanges();
        }

        //public virtual bool EsValido()
        //{
        //    return true;
        //}

        public void Dispose()
        {
            if (db != null)
            {
                if (db.Database.Connection.State == System.Data.ConnectionState.Open)
                    db.Database.Connection.Close();
                db.Dispose();
                GC.SuppressFinalize(this);
            }
        }

        public void Actualizar(E e, object key)
        {
            throw new NotImplementedException();
        }


        ///// <summary>
        ///// Cantidad de Registros
        ///// </summary>
        //public int Cantidad
        //{
        //    get
        //    {
        //        return entidad.AsQueryable().Count();
        //    }
        //}

        ///// <summary>
        ///// Obtener la PrimaryKey de la entidad
        ///// </summary>
        //public string[] keyNames
        //{
        //    get
        //    {
        //        return B3.Datos.Utilidades.Entidades.ObtenerClaves<E>(db);
        //    }

        //}


        //public ObjectContext ObjectContext
        //{
        //    get
        //    {
        //        return ((IObjectContextAdapter)db).ObjectContext;
        //    }
        //}

    }
}
