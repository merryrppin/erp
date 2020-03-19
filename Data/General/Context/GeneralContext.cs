using Data.General.Entities;
using Data.Product.Entities;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Data.General.Context
{
    public class GeneralContext : DbContext
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
        public DbSet<Data.Product.Entities.Product> Products { get; set; }
        public DbSet<ProductFeature> ProductFeatures { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<UserGroup> UserGroups { get; set; }
        public DbSet<UserGroup_User> User_UserGroups { get; set; }

        public GeneralContext() : base("AppContext")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<GeneralContext>());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            Database.SetInitializer<GeneralContext>(null);
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }
    }
}
