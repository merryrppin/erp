namespace Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Column_Menu_Ruta : DbMigration
    {
        public override void Up()
        {
            AddColumn("param.tblMenu", "Ruta", c => c.String(maxLength: 300));
        }
        
        public override void Down()
        {
            DropColumn("param.tblMenu", "Ruta");
        }
    }
}
