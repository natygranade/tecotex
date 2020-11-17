CREATE DATABASE  IF NOT EXISTS `tecotex` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tecotex`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tecotex
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

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
-- Table structure for table `stock_articulos`
--

DROP TABLE IF EXISTS `stock_articulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock_articulos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) NOT NULL,
  `codgaci` varchar(45) NOT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `codvaci_UNIQUE` (`codgaci`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_articulos`
--

LOCK TABLES `stock_articulos` WRITE;
/*!40000 ALTER TABLE `stock_articulos` DISABLE KEYS */;
INSERT INTO `stock_articulos` VALUES (1,23,'45','algodon'),(2,23,'56','poly'),(3,12,'78','rayon shally');
/*!40000 ALTER TABLE `stock_articulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_codigos`
--

DROP TABLE IF EXISTS `stock_codigos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock_codigos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codvale` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_codigos`
--

LOCK TABLES `stock_codigos` WRITE;
/*!40000 ALTER TABLE `stock_codigos` DISABLE KEYS */;
INSERT INTO `stock_codigos` VALUES (1,NULL),(2,NULL),(3,NULL),(4,NULL),(5,NULL),(6,NULL),(7,NULL),(8,NULL),(9,NULL),(10,NULL),(11,NULL),(12,NULL),(13,NULL),(14,NULL),(15,NULL),(16,NULL),(17,NULL),(18,NULL),(19,NULL),(20,NULL),(21,NULL),(22,NULL),(23,NULL),(24,NULL),(25,NULL),(26,NULL),(27,NULL),(28,NULL),(29,NULL),(30,NULL),(31,NULL),(32,NULL),(33,NULL),(34,NULL),(35,NULL),(36,NULL),(37,NULL),(38,NULL),(39,NULL),(40,NULL),(41,NULL),(42,NULL),(43,NULL),(44,NULL),(45,NULL),(46,NULL),(47,NULL),(48,NULL),(49,NULL),(50,NULL),(51,NULL),(52,NULL),(53,NULL),(54,NULL),(55,NULL),(56,NULL),(57,NULL),(58,NULL),(59,NULL),(60,NULL),(61,NULL),(62,NULL),(63,NULL),(64,NULL),(65,NULL),(66,NULL),(67,NULL),(68,NULL),(69,NULL),(70,NULL),(71,NULL),(72,NULL),(73,NULL),(74,NULL),(75,NULL),(76,NULL),(77,NULL),(78,NULL),(79,NULL),(80,NULL),(81,NULL),(82,NULL),(83,NULL),(84,NULL),(85,NULL),(86,NULL),(87,NULL),(88,NULL),(89,NULL),(90,NULL),(91,NULL),(92,NULL),(93,NULL),(94,NULL),(95,NULL),(96,NULL),(97,NULL),(98,NULL),(99,NULL),(100,NULL),(101,NULL),(102,NULL),(103,NULL),(104,NULL),(105,NULL);
/*!40000 ALTER TABLE `stock_codigos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_legajos`
--

DROP TABLE IF EXISTS `stock_legajos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock_legajos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `legajo` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_legajos`
--

LOCK TABLES `stock_legajos` WRITE;
/*!40000 ALTER TABLE `stock_legajos` DISABLE KEYS */;
INSERT INTO `stock_legajos` VALUES (1,231,'juan'),(2,548,'pablo'),(3,588,'javier'),(4,674,'romina');
/*!40000 ALTER TABLE `stock_legajos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_vales`
--

DROP TABLE IF EXISTS `stock_vales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock_vales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vale` int(11) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `hora` varchar(45) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `articulo_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `articulo_id_idx` (`articulo_id`),
  CONSTRAINT `articulo_id` FOREIGN KEY (`articulo_id`) REFERENCES `stock_articulos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_vales`
--

LOCK TABLES `stock_vales` WRITE;
/*!40000 ALTER TABLE `stock_vales` DISABLE KEYS */;
INSERT INTO `stock_vales` VALUES (1,102,2,'0000-00-00 00:00:00',NULL,10,1),(2,103,2,'0000-00-00 00:00:00',NULL,20,1);
/*!40000 ALTER TABLE `stock_vales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tecotex'
--

--
-- Dumping routines for database 'tecotex'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-17 17:28:41
