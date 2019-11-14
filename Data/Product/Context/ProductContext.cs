using Data.Product.Entities;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Data.Product.Context
{
    public class ProductContext : DbContext
    {
        public DbSet<ProductFeature> ProductFeatures { get; set; }

        public ProductContext() : base("AppContext")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<ProductContext>());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<ProductContext>(null);
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }
    }
}
