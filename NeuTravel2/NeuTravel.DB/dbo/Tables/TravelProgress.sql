CREATE TABLE [dbo].[TravelProgress] (
    [TravelProgressId]          INT      IDENTITY (1, 1) NOT NULL,
    [TravelInitiatedBy]         INT      NULL,
    [TravelInitiatedDate]       DATE NULL,
    [AccomodationBookedBy]      INT      NULL,
    [AccomodationBookedDate]    DATE NULL,
    [FlightsBookedBy]           INT      NULL,
    [FlightsBookedDate]         NVARCHAR(50) NULL,
    [TravellerConfirmationDate] DATE NULL,
    PRIMARY KEY CLUSTERED ([TravelProgressId] ASC),
    CONSTRAINT [FK_TravelDetails_AccomodationBookedBy] FOREIGN KEY ([AccomodationBookedBy]) REFERENCES [dbo].[User] ([UserId]),
    CONSTRAINT [FK_TravelDetails_FlightsBookedBy] FOREIGN KEY ([FlightsBookedBy]) REFERENCES [dbo].[User] ([UserId]),
    CONSTRAINT [FK_TravelDetails_TravelInitiatedBy] FOREIGN KEY ([TravelInitiatedBy]) REFERENCES [dbo].[User] ([UserId])
);

