CREATE TABLE [dbo].[TravelDetails] (
    [TravelDetailsId]             INT            IDENTITY (1, 1) NOT NULL,
    [TravelFrom]                  NVARCHAR (50)  NULL,
    [TravelTo]                    NVARCHAR (50)  NULL,
    [StartDate]                   DATE       NULL,
    [EndDate]                     DATE       NULL,
    [ProjectId]                   INT            NULL,
    [Purpose]                     NVARCHAR (50)  NULL,
    [HotelName]                   NVARCHAR (100) NULL,
    [Address]                     NVARCHAR (500) NULL,
    [RoomType]                    NVARCHAR (500) NULL,
    [Occupancy]                   NVARCHAR (500) NULL,
    [NumberOfRooms]               INT            NULL,
    [NumberOfNights]              INT            NULL,
    [InBoundFlightNameAndNumber]  NVARCHAR (100) NULL,
    [InBoundAirport]              NVARCHAR (100) NULL,
    [InBoundPNR]                  NVARCHAR (100) NULL,
    [OutBoundFlightNameAndNumber] NVARCHAR (100) NULL,
    [OutBoundAirport]             NVARCHAR (100) NULL,
    [OutBoundPNR]                 NVARCHAR (100) NULL,
    PRIMARY KEY CLUSTERED ([TravelDetailsId] ASC),
    CONSTRAINT [FK_TravelDetails_Project] FOREIGN KEY ([ProjectId]) REFERENCES [dbo].[Project] ([ProjectId])
);

