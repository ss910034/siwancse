-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 產生時間： 2017 年 11 月 10 日 02:29
-- 伺服器版本: 5.7.20-0ubuntu0.16.04.1
-- PHP 版本： 5.6.30-10+deb.sury.org~xenial+2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `siwancse`
--

-- --------------------------------------------------------

--
-- 資料表結構 `eating`
--

CREATE TABLE `eating` (
  `Id` int(100) NOT NULL,
  `Name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Phone` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Number` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `eating`
--

INSERT INTO `eating` (`Id`, `Name`, `Email`, `Phone`, `Number`) VALUES
(11, '呂曜達', 'alexlu157da@g-mail.nsysu.edu.tw', '0988868800', '1'),
(8, '江孟修', 'phidias.chiang@gmail.com', '0911323455', '1'),
(10, '陳建宏', 'jordanplus@gmail.com', '0988925497', '1'),
(9, '陳慶耀', 'Pichu@tih.tw', '0972722500', '1'),
(12, '詹皇廷', 'hugo2554298@gmail.com', '0989995298', '1'),
(13, '許文哲', 'a0072362170@gmail.com', '0972362170', '1'),
(14, '黃莉萍', 'lphuang@cse.nsysu.edu.tw', '0939194128', '1'),
(15, '莊敬中', 'gdly01@gmail.com', '0939456412', '1'),
(16, '邱柏菖', 'qurs9513123@gmail.com', '0910425550', '1'),
(17, '王心怡', 'mnbuc15987@gmail.com', '0910364701', '1'),
(61, '吳宗哲', 's25g5d4@gmail.com', '0921977012', '1'),
(19, '陳善由', 'samchen0312@gmail.com', '0938127781', '1'),
(20, '邱經達', 'kos74185@hotmail.com', '0978770629', '1'),
(21, '郝文銓', 'galactic_hero@hotmail.com', '0910101455', '1'),
(22, '傅柏翔', 'vaxwo0407@gmail.com', '0963476425', '1'),
(23, '陳仕庭', 'ago30425@gmail.com', '0987785169', '2'),
(24, '林稚雯', 'ywenywen220@gmail.com', '0924081220', '1'),
(25, '羅睿', 'hahalaurie@hotmail.com', '0928376050', '1'),
(26, '張建文', 'skill91002@gmail.com', '0928036103', '1'),
(27, '喬峯', 'curveshadow007@gmail.com', '0986505126', '2'),
(28, '蕭廷瑞', 'ss910034@gmail.com', '0975752165', '1'),
(29, '詹鈞傑', 'challengeja@gmail.com', '0933311800', '1'),
(30, '孔維顥', 'k6110932@hotmail.com', '0928132895', '1 or 2'),
(31, '羅文志', 'briandicky@gmail.com', '0988265677', '1'),
(32, '陳志瑜', 'r22233@hotmail.com', '0963385439', '1'),
(34, '陳冠男', 'markcup.cs96g@g2.nctu.edu.tw', '0911160310', '1'),
(35, '鄂程遠', 'ccjaw2000@gmail.com', '0987578587', '1'),
(36, '林必祥', 'hh1518135@gmail.com', '0988225323', '1'),
(37, '王塾憶', 'b963040010@student.nsysu.edu.tw', '0936146236', '1'),
(38, '戴杰安', 'acws523@gmail.com', '0955956600', '1'),
(39, '陳明曉', 's6060304@gmail.com', '0905377997', '1'),
(40, '李協彥', 'jaylee85241@gmail.com', '0937301322', '1'),
(43, '李濟宇', 'vacuumwasa@gmail.com', '0937562510', '1'),
(42, '彭永興', 'pengyh@iii.org.tw', '0926850203', '1'),
(44, '陳冠中', 'hu9867@gmail.com', '0935507092', '1'),
(45, '翁丞世', 'mob5566@gmail.com', '0925970510', '1'),
(46, '馮成駿', 'stevenjunfeng@gmail.com', '0920517865', '2'),
(47, '陳彥儒', 'jkddsars@gmail.com', '0912710173', '1'),
(48, '周君翰', 'gx1394@gmail.com', '0937729024', '1'),
(49, '簡學聖', 'a2255992@gmail.com', '0986818733', '1'),
(50, '林姿伶', 'rf200907052@gmail.com', '0932762963', '1'),
(51, '宋承威', 'ps212344444@gmail.com', '0934026599', '1'),
(52, '王曠銘', 'kmwang@gmail.com', '0952263351', '兩大一小'),
(53, '李佳穎', 'jacky8637@hotmail.com', '0981915822', '1'),
(54, '陳柏均', 'roy800117@hotmail.com', '0910968206', '1'),
(55, '楊佰謀', 'kulokase@gmail.com', '0988247896', '1'),
(56, '鐘緯駿', '-@..', '0919183050', '1'),
(57, '阮名晨', 'chage.juan@gmail.com', '0953313115', '2'),
(58, '何欣怡', 'shinyi.ho@gmail.com', '0918-616-076', '2'),
(59, '吳承穎', 'bick4562@gmail.com', '0952365907', '1'),
(62, '郭冠呈', 'gary0431@hotmail.com', '0911651710', '1'),
(63, '楊鵬宇', 'executor.tw@gmail.com', '0932384299', '1'),
(64, '陳奎原', 'chenkuiyuan@gmail.com', '0929206145', '2'),
(65, '葉政霖', 'deeppeace7@gmail.com', '0979510719', '1'),
(66, '楊凱珽', 'terence.kaiting@gmail.com', '0986800963', '1'),
(67, '許育誠', 'yakin.tw@gmail.com', '0981797642', '2'),
(68, '林信瀚', 'a780411@gmail.com', '0928131127', '1'),
(69, '林展宇', 'mujingud@gmail.com', '0988897283', '1大1小'),
(70, '陳建宏', 'jordanplus@gmail.com', '0988925497', '1'),
(71, '黃柏翰', 'cftyn1+nsysu@gmail.com', '0958677212', '1');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `eating`
--
ALTER TABLE `eating`
  ADD PRIMARY KEY (`Id`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `eating`
--
ALTER TABLE `eating`
  MODIFY `Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
