CREATE TABLE [dbo].[Travel] (
    [TravelId]         INT      IDENTITY (1, 1) NOT NULL,
    [TravellerId]      INT      NOT NULL,
    [TravelDetailsId]  INT      NOT NULL,
    [StatusId]         INT      NOT NULL,
    [TravelProgressId] INT      NOT NULL,
    [IsCancelled]      NVARCHAR(50)      NOT NULL,
    [CancelledDate]    DATE NULL,
    [CancelledBy]      INT NULL,
    [LastModifiedDate] DATE NULL,
    [LastModifiedBy]   INT      NULL,
    PRIMARY KEY CLUSTERED ([TravelId] ASC),
    CONSTRAINT [FK_Travel_To Progress] FOREIGN KEY ([TravelProgressId]) REFERENCES [dbo].[TravelProgress] ([TravelProgressId]),
    CONSTRAINT [FK_Travel_To TravelDetails] FOREIGN KEY ([TravelDetailsId]) REFERENCES [dbo].[TravelDetails] ([TravelDetailsId]),
    CONSTRAINT [FK_Travel_To User] FOREIGN KEY ([TravellerId]) REFERENCES [dbo].[User] ([UserId]),
	CONSTRAINT [FK_Travel_To CancelledBy] FOREIGN KEY ([CancelledBy]) REFERENCES [dbo].[User] ([UserId])

);

