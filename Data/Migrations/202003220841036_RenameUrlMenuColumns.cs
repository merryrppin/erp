namespace Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RenameUrlMenuColumns : DbMigration
    {
        public override void Up()
        {
            AddColumn("param.tblMenu", "Url", c => c.String(maxLength: 300));
            DropColumn("param.tblMenu", "Ruta");
        }
        
        public override void Down()
        {
            AddColumn("param.tblMenu", "Ruta", c => c.String(maxLength: 300));
            DropColumn("param.tblMenu", "Url");
        }
    }
}
