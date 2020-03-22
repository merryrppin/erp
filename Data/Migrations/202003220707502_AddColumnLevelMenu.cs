namespace Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddColumnLevelMenu : DbMigration
    {
        public override void Up()
        {
            AddColumn("param.tblMenu", "Level", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("param.tblMenu", "Level");
        }
    }
}
