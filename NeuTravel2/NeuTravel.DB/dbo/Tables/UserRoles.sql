CREATE TABLE [dbo].[UserRoles] (
    [RoleId] INT           IDENTITY (1, 1) NOT NULL,
    [Role]   NVARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([RoleId] ASC)
);

