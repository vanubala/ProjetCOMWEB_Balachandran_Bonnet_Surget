-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 03 mai 2025 à 16:18
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `notes`
--

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `ID` int(11) NOT NULL,
  `NOM_Prénom` text NOT NULL,
  `Identifiant` text NOT NULL,
  'Date_Naissance' DATE NOT NULL, -- Format : YYYY-MM-DD
  `Français` float NOT NULL,
  `Mathématiques` float NOT NULL,
  `Physique` float NOT NULL,
  `Biologie` float NOT NULL,
  `Philosophie` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`ID`, `NOM_Prénom`,`Identifiant`, `Date_Naissance`, `Français`, `Mathématiques`, `Physique`, `Biologie`, `Philosophie`) VALUES
(1, 'Ilan Caron','icaron','2007-05-03', 10.2, 11.5, 16.2, 14.1, 12),
(2, 'Benoît Rivière','briviere','2007-10-08', 8.5, 14.2, 13.4, 9.6, 11.1),
(3, 'Sacha Moreau','smoreau','2007-12-05', 17.2, 15.6, 16.9, 16.2, 14.6),
(4, 'Maëlle Barre','mbarre','2008-01-14', 16.5, 12.3, 11.5, 14.3, 18.9),
(5, 'Élodie Clement','icaron','2007-06-12', 9.1, 12.3, 12.5, 13, 10.2),
(6, 'Valentine Delattre','vdelattre','2007-03-03', 11.2, 9.4, 8.6, 13.5, 10.4),
(7, 'Ulysse Hubert','uhubert','2007-02-19', 8.4, 7.5, 9.2, 10.1, 9.4),
(8, 'Cyril Riviere','criviere','2007-08-29', 11.3, 11, 12.1, 8.6, 9.6),
(9, 'Clément Guillaume','cguillaume','2007-07-25', 13.5, 14.3, 11.2, 11.3, 12.3),
(10, 'Yasmine Dupuis','ydupuis','2008-01-02', 10.5, 15.2, 11, 14.3, 14.6),
(11, 'Delphine Leclercq','dleclercq','2007-08-26', 13.2, 7.3, 9.8, 12.1, 12.8),
(12, 'Mathilde Le Gall','mlegall','2007-04-27', 16.3, 19.3, 18.4, 18.6, 17.6),
(13, 'David Pons','dpons','2006-11-07', 11.1, 9.6, 11.2, 12, 9.9),
(14, 'Léo Poirier','lpoirier','2007-05-17', 10.2, 10.6, 11.4, 9.6, 12),
(15, 'Charlotte Lucas','clucas','2007-04-26', 10.2, 12.6, 11.6, 13.2, 9.3);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
