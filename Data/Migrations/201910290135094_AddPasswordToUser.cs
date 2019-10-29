namespace Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddPasswordToUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.tblUser", "Password", c => c.String(nullable: false, maxLength: 250));
        }
        
        public override void Down()
        {
            DropColumn("dbo.tblUser", "Password");
        }
    }
}
