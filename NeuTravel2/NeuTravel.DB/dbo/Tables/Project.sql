CREATE TABLE [dbo].[Project] (
    [ProjectId]   INT           IDENTITY (1, 1) NOT NULL,
    [ProjectName] NVARCHAR (MAX) NULL,
    PRIMARY KEY CLUSTERED ([ProjectId] ASC)
);

