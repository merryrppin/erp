namespace Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Estabilizacion_database : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.tblUser");
            CreateTable(
                "param.tblFieldValueType",
                c => new
                    {
                        FieldValueTypeId = c.Int(nullable: false, identity: true),
                        TextValue = c.String(maxLength: 100),
                        Description = c.String(maxLength: 500),
                        Active = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.FieldValueTypeId);
            
            CreateTable(
                "dbo.tblForm_FormProductFeature",
                c => new
                    {
                        Form_FormProductFeatureId = c.Int(nullable: false, identity: true),
                        FormId = c.Int(nullable: false),
                        FormProductFeatureId = c.Int(nullable: false),
                        Order = c.Int(nullable: false),
                        Active = c.Boolean(nullable: false),
                        Form_FormId = c.Int(),
                        FormProductFeature_FormId = c.Int(),
                    })
                .PrimaryKey(t => t.Form_FormProductFeatureId)
                .ForeignKey("dbo.tblForm", t => t.Form_FormId)
                .ForeignKey("dbo.tblForm", t => t.FormProductFeature_FormId)
                .Index(t => t.Form_FormId)
                .Index(t => t.FormProductFeature_FormId);
            
            CreateTable(
                "dbo.tblForm",
                c => new
                    {
                        FormId = c.Int(nullable: false, identity: true),
                        NameForm = c.String(maxLength: 100),
                        Description = c.String(),
                    })
                .PrimaryKey(t => t.FormId);
            
            CreateTable(
                "dbo.tblFormField",
                c => new
                    {
                        FormFieldId = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 100),
                        FieldValueTypeId = c.Int(nullable: false),
                        Active = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.FormFieldId)
                .ForeignKey("param.tblFieldValueType", t => t.FieldValueTypeId)
                .Index(t => t.FieldValueTypeId);
            
            CreateTable(
                "dbo.tblFormProductFeature_FormField",
                c => new
                    {
                        FormProductFeature_FormFieldId = c.Int(nullable: false, identity: true),
                        FormProductFeatureId = c.Int(nullable: false),
                        FormFieldId = c.Int(nullable: false),
                        Order = c.Int(nullable: false),
                        Active = c.Boolean(nullable: false),
                        FormField_FormId = c.Int(),
                        FormProductFeature_FormId = c.Int(),
                    })
                .PrimaryKey(t => t.FormProductFeature_FormFieldId)
                .ForeignKey("dbo.tblForm", t => t.FormField_FormId)
                .ForeignKey("dbo.tblForm", t => t.FormProductFeature_FormId)
                .Index(t => t.FormField_FormId)
                .Index(t => t.FormProductFeature_FormId);
            
            CreateTable(
                "dbo.tblFormProductFeature",
                c => new
                    {
                        FormProductFeatureId = c.Int(nullable: false, identity: true),
                        Name = c.String(maxLength: 100),
                        FormId = c.Int(nullable: false),
                        Columns = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.FormProductFeatureId)
                .ForeignKey("dbo.tblForm", t => t.FormId)
                .Index(t => t.FormId);
            
            CreateTable(
                "param.tblGeneralListOption",
                c => new
                    {
                        GeneralListOptionId = c.Int(nullable: false, identity: true),
                        GeneralListId = c.Int(nullable: false),
                        Name = c.String(nullable: false, maxLength: 100),
                        Description = c.String(maxLength: 500),
                        Order = c.Int(nullable: false),
                        FieldValueTypeId = c.Int(nullable: false),
                        TextValue = c.String(),
                        NumValue = c.Double(),
                        LogicValue = c.Boolean(),
                        Active = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.GeneralListOptionId)
                .ForeignKey("param.tblFieldValueType", t => t.FieldValueTypeId)
                .ForeignKey("param.tblGeneralList", t => t.GeneralListId)
                .Index(t => t.GeneralListId)
                .Index(t => t.FieldValueTypeId);
            
            CreateTable(
                "param.tblGeneralList",
                c => new
                    {
                        GeneralListId = c.Int(nullable: false, identity: true),
                        ListName = c.String(nullable: false, maxLength: 100),
                        Description = c.String(maxLength: 500),
                        FieldValueTypeId = c.Int(nullable: false),
                        Active = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.GeneralListId)
                .ForeignKey("param.tblFieldValueType", t => t.FieldValueTypeId)
                .Index(t => t.FieldValueTypeId);
            
            CreateTable(
                "param.tblMenu",
                c => new
                    {
                        MenuId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 100),
                        Description = c.String(nullable: false, maxLength: 500),
                        Icon = c.String(maxLength: 100),
                        ParentMenuId = c.Int(),
                        Order = c.Int(nullable: false),
                        Active = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.MenuId);
            
            CreateTable(
                "dbo.tblProductFeature",
                c => new
                    {
                        ProductFeatureId = c.Int(nullable: false, identity: true),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ProductFeatureId)
                .ForeignKey("dbo.tblProducts", t => t.ProductId)
                .Index(t => t.ProductId);
            
            CreateTable(
                "dbo.tblProducts",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        ProductCode = c.String(maxLength: 50),
                        Reference = c.String(maxLength: 50),
                        ProductDescription = c.String(),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        UnitMeasureCode = c.String(maxLength: 50),
                        QuantityUnitMeasure = c.Decimal(precision: 18, scale: 2),
                        WareHouseCode = c.String(maxLength: 50),
                        Available = c.Decimal(nullable: false, precision: 18, scale: 2),
                        SubLine = c.String(maxLength: 50),
                        Line = c.String(maxLength: 50),
                        Provider = c.String(maxLength: 500),
                        DuttyCode = c.String(maxLength: 50),
                        TariffDutty = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Discount = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.ProductId);
            
            CreateTable(
                "dbo.tblUserGroup_User",
                c => new
                    {
                        UserGroup_UserId = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        UserGroupId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.UserGroup_UserId)
                .ForeignKey("dbo.tblUser", t => t.UserId)
                .ForeignKey("dbo.tblUserGroup", t => t.UserGroupId)
                .Index(t => t.UserId)
                .Index(t => t.UserGroupId);
            
            CreateTable(
                "dbo.tblUserGroup",
                c => new
                    {
                        UserGroupId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 100),
                        Description = c.String(nullable: false, maxLength: 500),
                        Active = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.UserGroupId);
            
            AlterColumn("dbo.tblUser", "UserId", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.tblUser", "UserId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.tblUserGroup_User", "UserGroupId", "dbo.tblUserGroup");
            DropForeignKey("dbo.tblUserGroup_User", "UserId", "dbo.tblUser");
            DropForeignKey("dbo.tblProductFeature", "ProductId", "dbo.tblProducts");
            DropForeignKey("param.tblGeneralListOption", "GeneralListId", "param.tblGeneralList");
            DropForeignKey("param.tblGeneralList", "FieldValueTypeId", "param.tblFieldValueType");
            DropForeignKey("param.tblGeneralListOption", "FieldValueTypeId", "param.tblFieldValueType");
            DropForeignKey("dbo.tblFormProductFeature", "FormId", "dbo.tblForm");
            DropForeignKey("dbo.tblFormProductFeature_FormField", "FormProductFeature_FormId", "dbo.tblForm");
            DropForeignKey("dbo.tblFormProductFeature_FormField", "FormField_FormId", "dbo.tblForm");
            DropForeignKey("dbo.tblFormField", "FieldValueTypeId", "param.tblFieldValueType");
            DropForeignKey("dbo.tblForm_FormProductFeature", "FormProductFeature_FormId", "dbo.tblForm");
            DropForeignKey("dbo.tblForm_FormProductFeature", "Form_FormId", "dbo.tblForm");
            DropIndex("dbo.tblUserGroup_User", new[] { "UserGroupId" });
            DropIndex("dbo.tblUserGroup_User", new[] { "UserId" });
            DropIndex("dbo.tblProductFeature", new[] { "ProductId" });
            DropIndex("param.tblGeneralList", new[] { "FieldValueTypeId" });
            DropIndex("param.tblGeneralListOption", new[] { "FieldValueTypeId" });
            DropIndex("param.tblGeneralListOption", new[] { "GeneralListId" });
            DropIndex("dbo.tblFormProductFeature", new[] { "FormId" });
            DropIndex("dbo.tblFormProductFeature_FormField", new[] { "FormProductFeature_FormId" });
            DropIndex("dbo.tblFormProductFeature_FormField", new[] { "FormField_FormId" });
            DropIndex("dbo.tblFormField", new[] { "FieldValueTypeId" });
            DropIndex("dbo.tblForm_FormProductFeature", new[] { "FormProductFeature_FormId" });
            DropIndex("dbo.tblForm_FormProductFeature", new[] { "Form_FormId" });
            DropPrimaryKey("dbo.tblUser");
            AlterColumn("dbo.tblUser", "UserId", c => c.String(nullable: false, maxLength: 128));
            DropTable("dbo.tblUserGroup");
            DropTable("dbo.tblUserGroup_User");
            DropTable("dbo.tblProducts");
            DropTable("dbo.tblProductFeature");
            DropTable("param.tblMenu");
            DropTable("param.tblGeneralList");
            DropTable("param.tblGeneralListOption");
            DropTable("dbo.tblFormProductFeature");
            DropTable("dbo.tblFormProductFeature_FormField");
            DropTable("dbo.tblFormField");
            DropTable("dbo.tblForm");
            DropTable("dbo.tblForm_FormProductFeature");
            DropTable("param.tblFieldValueType");
            AddPrimaryKey("dbo.tblUser", "UserId");
        }
    }
}
