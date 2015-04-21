-- MySQL dump 10.13  Distrib 5.6.23, for osx10.10 (x86_64)
--
-- Host: localhost    Database: nodecrud
-- ------------------------------------------------------
-- Server version	5.6.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `optional`
--

DROP TABLE IF EXISTS `optional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `optional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optional`
--

LOCK TABLES `optional` WRITE;
/*!40000 ALTER TABLE `optional` DISABLE KEYS */;
INSERT INTO `optional` VALUES (1,'air_con'),(2,'bluetooth'),(3,'parking_sensors'),(4,'escape_motorcyle'),(5,'plasma_cannon'),(6,'cruise_control'),(7,'leather'),(8,'metallic_paint'),(9,'electric_locks'),(10,'xenon_lights'),(11,'nitro'),(12,'wings');
/*!40000 ALTER TABLE `optional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_optional`
--

DROP TABLE IF EXISTS `vehicle_optional`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehicle_optional` (
  `id_vehicle` int(11) DEFAULT NULL,
  `id_optional` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_optional`
--

LOCK TABLES `vehicle_optional` WRITE;
/*!40000 ALTER TABLE `vehicle_optional` DISABLE KEYS */;
INSERT INTO `vehicle_optional` VALUES (1,1),(10,1),(10,2),(11,2),(5,2),(6,2),(11,4),(8,5),(8,3);
/*!40000 ALTER TABLE `vehicle_optional` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `model` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (1,'Batmovel 1941',1941,'Fuga'),(2,'Tumbler',2008,'Tanque de guerra'),(3,'Herbie',1968,'Fusca de corrida'),(4,'Dick Vigarista',1968,'Corrida Maluca'),(5,'Penélope Charmosa',1968,'Corrida Maluca');
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-04-18 17:21:45
