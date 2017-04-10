--/*
--Post-Deployment Script Template							
----------------------------------------------------------------------------------------
-- This file contains SQL statements that will be appended to the build script.		
-- Use SQLCMD syntax to include a file in the post-deployment script.			
-- Example:      :r .\myfile.sql								
-- Use SQLCMD syntax to reference a variable in the post-deployment script.		
-- Example:      :setvar TableName MyTable							
--               SELECT * FROM [$(TableName)]					
----------------------------------------------------------------------------------------
--*/

----script to add values to Project Table

If (exists (select* from INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'Project'))
begin
delete from Project
end
If (exists (select* from INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'Travel'))
begin
delete from Travel
end
If (exists (select* from INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'TravelDetails'))
begin
delete from TravelDetails
end
If (exists (select* from INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'TravelProgress'))
begin
delete from TravelProgress
end
If (exists (select* from INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'User'))
begin
delete from [User]
end
If (exists (select* from INFORMATION_SCHEMA.TABLES where TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'UserRoles'))
begin
delete from UserRoles
end

SET IDENTITY_INSERT dbo.Project off
SET ANSI_WARNINGS off;
insert into dbo.Project(ProjectName) values ('2014 Mobility Project')
insert into dbo.Project(ProjectName) values ('2015 - Mobile Development')
insert into dbo.Project(ProjectName) values ('2105 CL Enhancements')
insert into dbo.Project(ProjectName) values ('ABM Industries, Inc. - 2105 CL Enhancements')
insert into dbo.Project(ProjectName) values ('ABM Industries, Inc. - Build and Deploy')
insert into dbo.Project(ProjectName) values ('ABM Industries, Inc. - Dynamic Activity')
insert into dbo.Project(ProjectName) values ('ABM Industries, Inc. - Unified Workforce Support')
insert into dbo.Project(ProjectName) values ('ABM Industries, Inc. - v12 Performance enhancements')
insert into dbo.Project(ProjectName) values ('American Cancer Society - Custom Dev Offshore Resource')
insert into dbo.Project(ProjectName) values ('American Cancer Society - Pa - Development staff aug resources')
insert into dbo.Project(ProjectName) values ('American Cancer Society - QA Resource ')
insert into dbo.Project(ProjectName) values ('Arjohuntleigh - Customer Portal - Phase 1')
insert into dbo.Project(ProjectName) values ('Assurant Inc. - Encore SSP Continuation')
insert into dbo.Project(ProjectName) values ('Black Knight Data and Analytics, LLC - AI Development - Phase I')
insert into dbo.Project(ProjectName) values ('Black Knight Data and Analytics, LLC - Cortex Phase II Development')
insert into dbo.Project(ProjectName) values ('Cec Entertainment, Inc. - Application Support  Peter Piper Integration')
insert into dbo.Project(ProjectName) values ('Cec Entertainment, Inc. - Peter Piper Data Integration')
insert into dbo.Project(ProjectName) values ('Coalfire - Portal Migration to SharePoint 2013')
insert into dbo.Project(ProjectName) values ('CoCentrix, Inc. - Arkansas Forms Project')
insert into dbo.Project(ProjectName) values ('CoCentrix, Inc. - Maine Forms Project')
insert into dbo.Project(ProjectName) values ('CoCentrix, Inc. - Rework Support')
insert into dbo.Project(ProjectName) values ('Community Partnership of Southern Arizona (CPSA) - SharePoint Support Pkg')
insert into dbo.Project(ProjectName) values ('Compassion International - TCPT Neuron Integration - Deloitte')
insert into dbo.Project(ProjectName) values ('CRM - CRM Enhancements')
insert into dbo.Project(ProjectName) values ('Deloitte Hq - TCPT Release 3  4 Bridge')
insert into dbo.Project(ProjectName) values ('DigiPen Institute Of Technology  - CRMClick Dimensions Higher Ed')
insert into dbo.Project(ProjectName) values ('E-470 Public Highway Authority - Web Release 4.1')
insert into dbo.Project(ProjectName) values ('FATCO Holdings, LLC - IMD Staff Aug Phase 1')
insert into dbo.Project(ProjectName) values ('FEI Company - SharePoint BI configuration assistance')
insert into dbo.Project(ProjectName) values ('Fish & Richardson P.C. - ECM Litigation Content')
insert into dbo.Project(ProjectName) values ('GE Energy - MSA 15.69 Program')
insert into dbo.Project(ProjectName) values ('HESS Corporation - BizTalk Program')
insert into dbo.Project(ProjectName) values ('HESS Corporation - HR Transformation BizTalk Support')
insert into dbo.Project(ProjectName) values ('HESS Corporation - Managed - Custom Application Support and Maintenance')
insert into dbo.Project(ProjectName) values ('HESS Corporation - Managed BizTalk Support')
insert into dbo.Project(ProjectName) values ('HESS Corporation - Managed CAD Support and Maint.')
insert into dbo.Project(ProjectName) values ('HESS Corporation - Managed SP & Admin Support')
insert into dbo.Project(ProjectName) values ('HESS Corporation - SharePoint Administration and Support')
insert into dbo.Project(ProjectName) values ('India Region Domestic - Expense System Operations')
insert into dbo.Project(ProjectName) values ('India Region Domestic - India Enterprise Applications')
insert into dbo.Project(ProjectName) values ('India Region Domestic - Neudesic IT US Staffing')
insert into dbo.Project(ProjectName) values ('Intel - ILG Matters Solution')
insert into dbo.Project(ProjectName) values ('Intel - Litigation Site Restructure')
insert into dbo.Project(ProjectName) values ('Intel - Or-SharePoint and NET Development Support')
insert into dbo.Project(ProjectName) values ('Intel - Sales Support')
insert into dbo.Project(ProjectName) values ('Isaca - CSX Sales Portal')
insert into dbo.Project(ProjectName) values ('Isaca - Intranet  Extranet Redesign Project')
insert into dbo.Project(ProjectName) values ('Isaca - Phase 2 - Pre-Discovery  Go-Live Support')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - Consumer Q2 Support Plan')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - POC SPrint 0')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - RGM Portal')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - Social Collaboration POC')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - SPARK')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - SPARK 2015 Support Ext')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - VX Phase 2')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - VX Site Development')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - VX Sprint 0')
insert into dbo.Project(ProjectName) values ('Johnson and Johnson - VX Support')
insert into dbo.Project(ProjectName) values ('Microsemi Corporation - BizTalk 6 month support (FR)')
insert into dbo.Project(ProjectName) values ('Microsemi Corporation - Cases Support')
insert into dbo.Project(ProjectName) values ('Microsemi Corporation - CCAR QR Development')
insert into dbo.Project(ProjectName) values ('Microsemi Corporation - CRM Support')
insert into dbo.Project(ProjectName) values ('Microsemi Corporation - FTD CRM Implementaton')
insert into dbo.Project(ProjectName) values ('Microsemi Corporation - IC Cases: SOC Phase')
insert into dbo.Project(ProjectName) values ('Microsemi Corporation - Voice')
insert into dbo.Project(ProjectName) values ('Microsoft India - Microsoft GD 2013-14 Consulting Team')
insert into dbo.Project(ProjectName) values ('Microsoft India - Microsoft Project CP Billed Copy')
insert into dbo.Project(ProjectName) values ('Microsoft India - Microsoft Project CP UnBilled')
insert into dbo.Project(ProjectName) values ('MS Communities - ASP.NET')
insert into dbo.Project(ProjectName) values ('MS Communities - IIS.NET')
insert into dbo.Project(ProjectName) values ('Neudesic - Administrative')
insert into dbo.Project(ProjectName) values ('Neudesic - CRM Banking/Financial')
insert into dbo.Project(ProjectName) values ('Neudesic - Floating Holiday')
insert into dbo.Project(ProjectName) values ('Neudesic - Holiday')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Administrative')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Client Portal – Testing Automation')
insert into dbo.Project(ProjectName) values ('Neudesic - India - EM Activities')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Holiday')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Internal Applications')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Interviews')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Learning & Development')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Neudesic Investment')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Practice Delivery')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Pre-Sales')
insert into dbo.Project(ProjectName) values ('Neudesic - India - PTO')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Sales')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Skill Central')
insert into dbo.Project(ProjectName) values ('Neudesic - India - Training')
insert into dbo.Project(ProjectName) values ('Neudesic - India - ZZZ TBS Entries')
insert into dbo.Project(ProjectName) values ('Neudesic - India Investment - Compassion Intl')
insert into dbo.Project(ProjectName) values ('Neudesic - Paid Time Off')
insert into dbo.Project(ProjectName) values ('Neudesic - TPG Standard Sales Asset Creation')
insert into dbo.Project(ProjectName) values ('Neudesic - TPM')
insert into dbo.Project(ProjectName) values ('Neudesic Internal IT - Internal IT')
insert into dbo.Project(ProjectName) values ('Neudesic Training - Quality Assurance Training')
insert into dbo.Project(ProjectName) values ('Neudesic Training - UX Training')
insert into dbo.Project(ProjectName) values ('OXY Inc - BBSO Mobile App')
insert into dbo.Project(ProjectName) values ('OXY Inc - IT PMO SharePoint Site - UX')
insert into dbo.Project(ProjectName) values ('Pacific Retirement Services - Interim SharePoint Support')
insert into dbo.Project(ProjectName) values ('Pacific Retirement Services - Intranet upgrade')
insert into dbo.Project(ProjectName) values ('Ports America, Inc. - M21 TOS Mod. Ph2 Support')
insert into dbo.Project(ProjectName) values ('Ports America, Inc. - Sales Support')
insert into dbo.Project(ProjectName) values ('Ports America, Inc. - TOS Re-architecture Initiative')
insert into dbo.Project(ProjectName) values ('Prince Resorts Hawaii - CRM 2011 - Neuguest Support Extension')
insert into dbo.Project(ProjectName) values ('Prince Resorts Hawaii - NeuGuest Support Pkg 2015')
insert into dbo.Project(ProjectName) values ('Private Health - Patient Mgt. Web Portal')
insert into dbo.Project(ProjectName) values ('Pulte Homes - Purchase Pro Extension')
insert into dbo.Project(ProjectName) values ('QTC Management - Enterprise Billing Payment System')
insert into dbo.Project(ProjectName) values ('QTC Management - Sales Support')
insert into dbo.Project(ProjectName) values ('Realtors Property Resource - 2015 - Mobile Development')
insert into dbo.Project(ProjectName) values ('Salt River Project - OmbudsmanCommunity Affairs Modernization')
insert into dbo.Project(ProjectName) values ('Schlumberger Technology Corp - Studio World Map UX Phase 1')
insert into dbo.Project(ProjectName) values ('Stryker Corporation - NMS-Proactive Monitoring Support-BizTalk Environment')
insert into dbo.Project(ProjectName) values ('Sunstate Equipment - NMS Annual App Support')
insert into dbo.Project(ProjectName) values ('Support - CRM')
insert into dbo.Project(ProjectName) values ('Turning Stone Resort Casino, LLC - Savon Loyalty Solution')
insert into dbo.Project(ProjectName) values ('Universal Technical Institute - Offshore Staff Aug Pilot')
insert into dbo.Project(ProjectName) values ('UPS - Apple EDI-858 and Apple Predictive Visibility Review')
insert into dbo.Project(ProjectName) values ('UPS - CVM - Support  Enhancement Team - 12 Week Extension')
insert into dbo.Project(ProjectName) values ('UPS - GE Visibility Project')
insert into dbo.Project(ProjectName) values ('UPS - Sales Support')
insert into dbo.Project(ProjectName) values ('Wilton Industries - A-PE Pricing Phase 2')
insert into dbo.Project(ProjectName) values ('Wilton Industries - PE Pricing Workflow - Phase 1')
insert into dbo.Project(ProjectName) values ('Wipro GE Healthcare Pvt. Ltd. - Product Consulting 2014 2015')
insert into dbo.Project(ProjectName) values ('Word & Brown - HIX GCA 2012 - India')
SET ANSI_WARNINGS ON
SET IDENTITY_INSERT dbo.[UserRoles] on
insert into dbo.UserRoles(RoleId,Role) values (1,'DCS')
insert into dbo.UserRoles(RoleId,Role) values (2,'HCM')
insert into dbo.UserRoles(RoleId,Role) values (3,'Employee')
insert into dbo.UserRoles(RoleId,Role) values (4,'Finance')
SET IDENTITY_INSERT dbo.[UserRoles] off
SET IDENTITY_INSERT dbo.[User] off
insert into dbo.[User](FirstName,LastName,RoleId,UserName) values ('Harshvardhan','Poddar',1,'Harshvardhan.Poddar')
insert into dbo.[User](FirstName,LastName,RoleId,UserName) values ('Neeharikha','Pathuri',1,'Neeharikha.Pathuri')

select*from [User]
select*from UserRoles
select* from Travel
select* from TravelProgress
select* from  TravelDetails
