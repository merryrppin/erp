using Data.Administration.Entities;
using Data.Product.Entities;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Data.Administration.Context
{
    public class AdministrationContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<GeneralList> GeneralLists { get; set; }
        public DbSet<GeneralListOption> GeneralListOptions { get; set; }
        public DbSet<FieldValueType> FieldValueTypes { get; set; }
        public DbSet<Form> Forms { get; set; }
        public DbSet<Form_FormProductFeature> Form_FormProductFeatures { get; set; }
        public DbSet<FormProductFeature_FormField> FormProductFeature_FormFields { get; set; }
        public DbSet<FormProductFeature> FormProductFeatures { get; set; }
        public DbSet<FormField> FormFields { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<ProductFeature> ProductFeatures { get; set; }

        public AdministrationContext() : base("AppContext")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<AdministrationContext>());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<AdministrationContext>(null);
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }
    }
}
