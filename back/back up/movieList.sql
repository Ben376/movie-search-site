-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: movieList
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu18.04.1

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
-- Table structure for table `list`
--

DROP TABLE IF EXISTS `list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `list` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(25) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `runtime` int(11) DEFAULT NULL,
  `genre` varchar(30) DEFAULT NULL,
  `director` varchar(25) DEFAULT NULL,
  `actors` varchar(60) DEFAULT NULL,
  `plot` varchar(300) DEFAULT NULL,
  `posterUrl` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `list`
--

LOCK TABLES `list` WRITE;
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
INSERT INTO `list` VALUES (1,'Conan',1982,129,'Fantasy','John Milius','Arnold Schwarzenegger','plot','https://www.indiewire.com/wp-content/uploads/2017/05/conan-the-barbarian-1982.png?w=383'),(11,'Inception',2010,148,'Fantasy','Christopher Nolan','Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page','A thief, who steals corporate secrets through use of dream-sharing technology...','https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg'),(12,'Vertigo',1958,128,'Horror','Alfred Hitchcock','James Stewart, Kim Novak, Barbara Bel Geddes','A San Francisco detective suffering from acrophobia investigates the strange activities of an old friend\'s wife','http://ia.media-imdb.com/images/M/MV5BNzY0NzQyNzQzOF5BMl5BanBnXkFtZTcwMTgwNTk4OQ@@._V1_SX300.jpg'),(13,'Scarface',1983,170,'Drama','Brian De Palma','Al Pacino, Steven Bauer, Michelle Pfeiffer','In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.','https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg'),(14,'Pulp Fiction',1994,154,'Drama','Quentin Tarantino','Tim Roth, Amanda Plummer, Laura Lovelace','The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.','https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg'),(15,'Requiem for a Dream',2000,102,'Drama','Darren Aronofsky','Ellen Burstyn, Jared Leto, Jennifer Connelly','The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.','https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg'),(16,'Snatch',2000,102,'Drama','Guy Ritchie','Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt','Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.','http://ia.media-imdb.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg'),(17,'The Last Samurai',2003,154,'Drama','Edward Zwick','Ken Watanabe, Tom Cruise, William Atherton','An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.','http://ia.media-imdb.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg'),(18,'Apocalypto',2006,139,'Drama','Mel Gibson','Rudy Youngblood, Dalia Hernández, Jonathan Brewer','As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.','https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg'),(19,'No Country for Old Men',2007,122,'Drama','Ethan Coen, Joel Coen','Tommy Lee Jones, Javier Bardem, Josh Brolin','Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.','https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg'),(20,'Gran Torino',2008,116,'Drama','Clint Eastwood','Clint Eastwood','Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski\'s prized possession: a 1972 Gran Torino.','http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg'),(21,'Planet 51',2009,91,'Drama','orge Blanco, Javier Abad','Jessica Biel, John Cleese, Gary Oldman','An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.','http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg'),(22,'Interstellar',2014,169,'Drama','Christopher Nolan','Ellen Burstyn, Matthew McConaughey, Mackenzie Foy','A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.','https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg'),(23,'Ex Machina',2015,108,'Fantasy','Alex Garland','Domhnall Gleeson, Corey Johnson, Oscar Isaac','A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.','https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg'),(24,'The Martian',2015,144,'Fantasy','Ridley Scott','Matt Damon, Jessica Chastain, Kristen Wiig','An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.','https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg'),(25,'Taxi Driver',1976,113,'Drama','Martin Scorsese','Diahnne Abbott, Frank Adu, Victor Argo','A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City...','https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg');
/*!40000 ALTER TABLE `list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-18 20:40:25
