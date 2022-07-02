-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: letbar-db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

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
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `province` varchar(20) NOT NULL,
  `locality` varchar(20) NOT NULL,
  `street` varchar(50) NOT NULL,
  `street_number` int(11) NOT NULL,
  `comments` varchar(200) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address_alias` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods`
--

DROP TABLE IF EXISTS `payment_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_methods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods`
--

LOCK TABLES `payment_methods` WRITE;
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_methods_data`
--

DROP TABLE IF EXISTS `payment_methods_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment_methods_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `card_number` int(16) DEFAULT NULL,
  `card_bank` varchar(20) DEFAULT NULL,
  `owner` varchar(50) DEFAULT NULL,
  `cbu` int(50) DEFAULT NULL,
  `mp_alias` varchar(50) DEFAULT NULL,
  `mp_cvu` int(50) DEFAULT NULL,
  `payment_id` int(16) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `payment_methods_data_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `payment_methods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_methods_data`
--

LOCK TABLES `payment_methods_data` WRITE;
/*!40000 ALTER TABLE `payment_methods_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `icon` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `product_categories` VALUES (1,'cervezas','Cervezas','/img/categoryIcons/cervezas.png'),(2,'vinos','Vinos','/img/categoryIcons/vinos.png'),(3,'sinAlcohol','Sin alcohol','/img/categoryIcons/sinAlchol.png'),(4,'destilados','Destilados','/img/categoryIcons/destilados.png'),(5,'espumantes','Espumantes','/img/categoryIcons/espumantes.png'),(6,'snacks','Snacks','/img/categoryIcons/snacks.png');
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(200) NOT NULL,
  `category_id` int(20) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL,
  `priceUnit` decimal(10,0) NOT NULL,
  `cantDisc` int(20) DEFAULT NULL,
  `priceCant` decimal(10,0) DEFAULT NULL,
  `offer` tinyint(1) NOT NULL,
  `year` int(11) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `graduation` decimal(5,1) DEFAULT NULL,
  `cantValoration` decimal(5,1) DEFAULT NULL,
  `acuValoration` int(11) DEFAULT NULL,
  `valoration` decimal(5,1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (9,'Cerveza Andes Origen Rubia Lata','Andes Origen Rubia es una cerveza mendocina, hecha con agua del deshielo de la cordillera y pura malta tostada a fuego lento, que ofrece colores y texturas bien distintivas. Esta cerveza tiene un arom','producto_andes-rubia21_1655931924062.jpg',1,'Andes','473 ml',200,6,125,0,0,200,4.5,0.0,0,0.0),(10,'Cerveza Andes Origen IPA Lata','Andes Origen IPA Andina (473ml) es una cerveza con un intenso aroma a lúpulo, frutado y dulce, de apariencia dorado profundo, espuma blanca, sabor amargo balanceado con el dulzor de la uva. Esta cerve','producto_andes-ipa_1655932026134.jpg',1,'Andes','473ml',213,6,142,0,0,150,4.7,0.0,0,0.0),(11,'Cerveza Andes Origen Roja Lata','La Andes Origen Roja, color ámbar cobrizo, es una cerveza de deleite. Su aroma a suave caramelo y leve lúpulo logran un balance perfecto. Esta cerveza posee un final seco y una leve acidez que la hace','producto_andes-roja21_1655932111071.jpg',1,'Andes','473',213,6,142,0,0,500,4.7,0.0,0,0.0),(12,'Cerveza Andes Origen Negra Lata','La Andes Orgien Negra es una cerveza elaborada con maltas tostadas que le otorgan su particular aroma. Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café. ','producto_andes-negra3_1655932189319.jpg',1,'Andes','473ml',213,6,142,0,0,120,4.7,0.0,0,0.0),(13,'Santa Julia - Malbec','Es un vino de color ojo violáceo de buena intensidad, con un intenso aroma a frutas rojas maduras como moras, ciruelas, frutillas, pasas de uva y mermelada. Cosecha manual. Vinificación clásica, con s','producto_santa-julia_1655932267900.jpg',2,'Santa Julia','750ml',550,10,500,0,2005,1000,9.0,0.0,0,0.0),(14,'Absolut Vodka','Absolut Vodka se hace exclusivamente a partir de ingredientes naturales y, a diferencia de lo que ocurre con muchos otros vodkas, no contiene azúcar añadido. Absolut es, de hecho, tan puro como puede ','producto_absolut-vodka_1655932340118.jpg',4,'Absolut','1L',1500,6,1450,0,0,500,40.0,0.0,0,0.0),(15,'Fernet Branca','Fernet Branca se elabora a partir de la combinación de 27 plantas y especias. Se madurada en barricas de roble durante 12 meses, lo que le confiere su marcado carácter. El proceso de producción es com','producto_fernetbranca_1655932391011.jpg',4,'Branca','1L',1250,6,1200,1,0,5000,39.0,0.0,0,0.0),(16,'Coca-Cola','Es un refresco azucarado de color marrón oscuro o negro debido al caramelo de su composición.','producto_cocacola_1655932489598.jpg',3,'Coca-Cola','2.25L',230,12,220,0,0,1200,0.0,0.0,0,0.0),(17,'Brahma Chopp','Brahma Chopp es una cerveza tipo pilsen clara, brillante, transparente e internacionalmente conocida como una cerveza de excelente calidad. Es más leve, con el paladar clásico de baja fermentación y c','producto_brahama1L_1655932574812.jpg',1,'Brahma','1L',180,12,170,1,0,300,4.8,0.0,0,0.0),(18,'Cerveza Quilmes','Cerveza argentina, elaborada con ingredientes nacionales. Con equilibrio entre el suave amargor del lúpulo y el sabor del cereal. Color amarillo dorado brillante.','producto_quilmes1L_1655932658185.jpg',1,'Quilmes','1L',170,6,160,0,0,350,4.9,0.0,0,0.0),(19,'Cerveza Quilmes \'Bajo Cero\'','Quilmes Bajo Cero es una cerveza ligera que se destaca por su suavidad única y su extrema refrescancia. Ofrece una alternativa diferente a Quilmes Cristal pensada para aquellos consumidores que prefie','producto_quilmescero_1655932720014.jpg',1,'Quilmes','1L',230,12,220,1,0,200,4.9,0.0,0,0.0),(20,'Cerveza Patagonia Lager','Patagonia Hoppy Lager una cerveza Lager lupulada. Elaborada con la técnica de Dry Hopping en frío, se caracteriza por mayor presencia de lúpulo en aroma y sabor, sin aportarle mayor amargor, logrando ','producto_patagonia-lager_1655932782257.jpg',1,'Patagonia','710ml',213,12,200,0,0,300,4.7,0.0,0,0.0),(21,'Cerveza Andes Origen Rubia','La Andes Orgien Rubia es una cerveza elaborada con maltas tostadas que le otorgan su particular aroma. Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café. ','producto_andes-mendocina_1655932902018.jpg',1,'Andes','1L',350,24,320,1,0,540,4.7,0.0,0,0.0),(22,'Cerveza Andes Origen Negra','La Andes Orgien Negra es una cerveza elaborada con maltas tostadas que le otorgan su particular aroma. Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café. ','producto_andes-black_1655932945170.jpg',1,'Andes','1L',500,12,489,0,0,500,5.3,0.0,0,0.0),(23,'Cerveza Corona','Corona es una cerveza con cuerpo sin igual, aroma limpio y un refrescante sabor a cebada malteada y maltas especiales, se acompaña de una abundante y consistente espuma. Ofrece un carácter unico y un ','producto_corona_1655933007474.jpg',1,'Corona','710ml',250,24,230,1,0,500,4.7,0.0,0,0.0),(24,'Cerveza Andes','Cerveza rubia refrescante con cuerpo, balanceada y un suave amargor. Un típico ejemplo de cerveza tipo alemana adaptada al gusto de los mendocinos.','producto_andes1L_1655933075744.jpg',1,'Andes','1L',180,24,150,1,0,123,4.7,0.0,0,0.0),(25,'Cerveza Quilmes 340ml','Cerveza argentina, elaborada con ingredientes nacionales. Con equilibrio entre el suave amargor del lúpulo y el sabor del cereal. Color amarillo dorado brillante. Es una cerveza equilibrada, de gran r','producto_quilemes-bot_1655933136994.jpg',1,'Quilmes','340ml',180,12,170,1,0,550,5.3,0.0,0,0.0),(26,'Cerveza Patagonia Kune','on una combinación de maltas especiales, que da lugar a una cerveza de color dorado bronce brillante de leve amargor y cuerpo medio. Cerveza muy balanceada y fácil de tomar.','producto_patagonia-kune_1655933201042.jpg',1,'Patagonia','730ml',350,24,200,1,0,630,0.0,0.0,0,0.0),(27,'Cerveza Andes Origen Miel Lata','Andes Miel es la nueva cerveza elaborada por la empresa mendocina Andes Origen elaborada con agua de deshielo de la cordillera y pura malta tostada a fuego lento. Con sabor a malta, leve aroma a lúpul','producto_andes-miel_1655933261620.jpg',1,'Andes','473ml',230,24,200,1,0,500,4.7,0.0,0,0.0),(28,'Cerveza Patagonia Amber Lager Lata','Es una cerveza con una combinación de lúpulos patagónicos y un blend de finas maltas que generan su color rojizo, un delicado aroma y un amargor apacible que permite dar a luz a un tostado delicioso','producto_patagonia-amberlager_1655933478302.jpg',1,'Patagonia','473ml',200,24,149,1,0,300,4.7,0.0,0,0.0),(29,'Cerveza Quilmes Lata','Cerveza argentina, elaborada con ingredientes nacionales. Con equilibrio entre el suave amargor del lúpulo y el sabor del cereal. Color amarillo dorado brillante. Es una cerveza equilibrada, de gran r','producto_quilmes-lat_1655933534732.jpg',1,'Quilmes','473ml',200,24,150,1,0,500,4.9,0.0,0,0.0),(30,'Novecento Extra Dulce Night','Un vino espumoso argentino, de la bodega Dante Robino, Mendoza. El color del Champagne Extra Dulce Night es de un Amarillo verdoso de buena intensidad. Burbujas casi pequeñas. Buena intensidad de frut','producto_novecento_1655935163156.jpg',5,'','750ml',610,12,458,1,0,500,15.0,0.0,0,0.0),(31,'Pringles Texas BBQ sauce','Papas fritas con sabor a barbacoa.','producto_pringles-01_1655935238764.jpg',6,'','165grs',280,12,270,1,0,1000,0.0,0.0,0,0.0),(38,'prueba imagen 2','sdlkjhcfojsdugfksjhdfbgikjsdfkjhsdgfkjhsgdfkjhagsdkfjhgasdf','producto_photo-1542831371-29b0f74f9713-5_1656719703260.jpg',1,'32146','1234',123214,321,321,0,1234,321,321.0,0.0,0,0.0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purchases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `payment_method_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `payment_method_id` (`payment_method_id`),
  CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `purchases_ibfk_2` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`),
  CONSTRAINT `purchases_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `purchases_ibfk_4` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shopping_carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `purchase_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_id` (`purchase_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `shopping_carts_ibfk_1` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `shopping_carts_ibfk_10` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `shopping_carts_ibfk_11` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `shopping_carts_ibfk_12` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `shopping_carts_ibfk_13` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `shopping_carts_ibfk_14` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `shopping_carts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `shopping_carts_ibfk_3` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `shopping_carts_ibfk_4` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `shopping_carts_ibfk_5` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `shopping_carts_ibfk_6` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `shopping_carts_ibfk_7` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  CONSTRAINT `shopping_carts_ibfk_8` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `shopping_carts_ibfk_9` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `tel` int(11) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `birthday` date NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `users_categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'pepito','pepito','pepito@gmail.com','Let123456',123456,'default.jpg','2000-07-19',1),(5,'Lucas','Fiorentino','lucas@gmail.com','$2a$10$ElHM68JAwKclRPY.lOusj./IE.m/BpGH530xjqy5XKD.PBRw4sO56',12345612,'1655903693982.jpg','2000-02-20',2),(6,'Fer','Fernanda','fer@gmail.com','$2a$10$dTeYGfu2LVCYJP3D8Bvd.eDxGXqJ3Db1r4kofBQUQo20qKszV8sWG',1234156,'1655936614999.jpg','2000-02-20',1),(7,'Ana','Casado','ana@gmail.com','$2a$10$Gdnj4nkZolb95NhoiRltCePRGyo3WO3AOaas648NUyV3GddK3gFoG',1234512,'1655936644541.jpg','2000-02-20',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_categories`
--

DROP TABLE IF EXISTS `users_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_categories`
--

LOCK TABLES `users_categories` WRITE;
/*!40000 ALTER TABLE `users_categories` DISABLE KEYS */;
INSERT INTO `users_categories` VALUES (1,'usuario'),(2,'admin');
/*!40000 ALTER TABLE `users_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_payments`
--

DROP TABLE IF EXISTS `users_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_method_id` varchar(20) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_payments`
--

LOCK TABLES `users_payments` WRITE;
/*!40000 ALTER TABLE `users_payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'letbar-db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-01 21:09:20
