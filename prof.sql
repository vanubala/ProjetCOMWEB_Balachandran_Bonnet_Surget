-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 10 mai 2025 à 23:04
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.0.28

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
-- Structure de la table `prof`
--

CREATE TABLE `prof` (
  `ID` int(11) NOT NULL,
  `NOM_Prénom` text NOT NULL,
  `Identifiant` text NOT NULL,
  `Date_Naissance` text NOT NULL,
  `Matière` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `prof` (`ID`, `NOM_Prénom`,`Identifiant`, `Date_Naissance`, `Matière`) VALUES
(1, 'Lou Lefevre ','llefevre','1980-05-12', 'Anglais'),
(2, 'Paul Durand ','pdurand','1975-11-03', 'Mathématiques'),
(3, 'Emile Bernard ','ebernard','1985-08-22', 'Physique'),
(4, 'Pascal Dufresne ','pdufresne','1970-01-14', 'Philosophie'),
(5, 'Laura Giraud','lgiraud','1978-03-05', 'Biologie');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `prof`
--
ALTER TABLE `prof`
  ADD PRIMARY KEY (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
