namespace TestProjectV1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ad : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BOOK",
                c => new
                    {
                        ID = c.Long(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 4000),
                        Author = c.String(maxLength: 200),
                        EditionNumber = c.Int(nullable: false),
                        ProductionDate = c.DateTime(nullable: false),
                        TypeId = c.Int(nullable: false),
                        AddedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IP = c.String(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.BOOKTYPE", t => t.TypeId, cascadeDelete: true)
                .Index(t => t.TypeId);
            
            CreateTable(
                "dbo.BOOKTYPE",
                c => new
                    {
                        TypeId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 4000),
                        ID = c.Long(nullable: false),
                        AddedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IP = c.String(),
                    })
                .PrimaryKey(t => t.TypeId);
            
            CreateTable(
                "dbo.COMMENT",
                c => new
                    {
                        ID = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                        AddedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IP = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.ERRORLOG",
                c => new
                    {
                        ID = c.Long(nullable: false, identity: true),
                        ErrorMessage = c.String(nullable: false),
                        AddedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IP = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.DEPARTMANS",
                c => new
                    {
                        ID = c.Long(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        IsActive = c.Int(nullable: false),
                        AddedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IP = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.USERS",
                c => new
                    {
                        ID = c.Long(nullable: false, identity: true),
                        UserName = c.String(nullable: false),
                        Email = c.String(nullable: false),
                        Password = c.String(nullable: false),
                        AddedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IP = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.USERPROFILES",
                c => new
                    {
                        ID = c.Long(nullable: false),
                        FirstName = c.String(nullable: false, maxLength: 100),
                        LastName = c.String(maxLength: 100),
                        Address = c.String(maxLength: 4000),
                        AddedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(nullable: false),
                        IP = c.String(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.USERS", t => t.ID)
                .Index(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.USERPROFILES", "ID", "dbo.USERS");
            DropForeignKey("dbo.BOOK", "TypeId", "dbo.BOOKTYPE");
            DropIndex("dbo.USERPROFILES", new[] { "ID" });
            DropIndex("dbo.BOOK", new[] { "TypeId" });
            DropTable("dbo.USERPROFILES");
            DropTable("dbo.USERS");
            DropTable("dbo.DEPARTMANS");
            DropTable("dbo.ERRORLOG");
            DropTable("dbo.COMMENT");
            DropTable("dbo.BOOKTYPE");
            DropTable("dbo.BOOK");
        }
    }
}
