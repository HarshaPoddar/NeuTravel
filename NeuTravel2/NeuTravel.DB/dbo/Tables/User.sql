CREATE TABLE [dbo].[User] (
    [UserId]    INT           IDENTITY (1, 1) NOT NULL,
    [FirstName] NVARCHAR (50) NULL,
    [LastName]  NVARCHAR (50) NULL,
    [RoleId]    INT           NULL,
    [UserName]  NVARCHAR (50) NULL,
    [UserEmail] NCHAR(10) NULL, 
    PRIMARY KEY CLUSTERED ([UserId] ASC),
    CONSTRAINT [FK_Employee_To UserRoles] FOREIGN KEY ([RoleId]) REFERENCES [dbo].[UserRoles] ([RoleId])
);

