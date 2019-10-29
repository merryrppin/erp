namespace Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FirstMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.tblUser",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        Active = c.Boolean(nullable: false),
                        UserFirstName = c.String(nullable: false, maxLength: 200),
                        UserLastName = c.String(nullable: false, maxLength: 200),
                        UserEmail = c.String(nullable: false, maxLength: 200),
                        Login = c.String(nullable: false, maxLength: 250),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.tblUser");
        }
    }
}
