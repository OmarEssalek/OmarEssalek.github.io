'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "ebb59561a8d048a4c65779afbddfb646",
"/": "ebb59561a8d048a4c65779afbddfb646",
"main.dart.js": "3c27c6050abddd225b6e43d8150f12e6",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "7e302499fca4d5699a344545a40d7bc6",
"icons/icon.png": "7e302499fca4d5699a344545a40d7bc6",
"manifest.json": "6e67cf1e356218af2a9b740e75ccf170",
".git/config": "15ea7f6b5e7850c49b1f5b1c53c1007b",
".git/objects/61/35a65117d35d0615d874150ed8e031dbd900b4": "dc4adbcb0e0d231007469d44b9431b1d",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/50/44b64a12b31ae205a30f12f2504caf5b4a2936": "4ae286d2feef878752bdf83c4376cf58",
".git/objects/50/c9196e1fdf65c2db26c40276200f545630202e": "346f831524c147f8bb859dd224675140",
".git/objects/6f/61ba31999b4bf58c57550eab10deff6b7bfd01": "66d6beb2a3c3ed6563c91e53829607d6",
".git/objects/03/e234d45ebeeb4f833a140cc8e6a3000e7bac56": "2d610fd1716ef88585257caf661c0c4d",
".git/objects/9b/8fc387fd0f1a638f82da656adfbd3dd759927a": "0af0e9e5a492b12ccfb56bdd10243c1a",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/1c84d4f5ee77308e06bef35f112e484d8d7241": "ec21537e101160a526b35b4f869470fd",
".git/objects/35/d93bb9b43970f5342bee28945959645da2af4c": "313d4fc7ee11390d1a7709dbee907d04",
".git/objects/51/961dd02d4db7ded5cbfd0e054b48393090d803": "6a830d2e7d05cb20b9b2bf900ff7ad82",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/60/beba5c72e4bbbfa04cf9ecb0ddbfb79479729c": "1fb779a93e5405b92ad26af10d1bd7ed",
".git/objects/60/c9759f41b6c638fdfc60a1e73e2adff7e904f7": "c7d5c9c561b82e69453908ed1cf9a3c2",
".git/objects/5a/25951bfccc4a389a62cc4b862326f3facfb02b": "515db906fba20522f3fa5c1236f26bce",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/9d/0f4be08835675da0c6202ecb6e99bfc2b3f965": "7284b32e052ad64895fd0d2a47659f10",
".git/objects/a3/3aa0fefa214233823e3a4be2c5070e09d87cbe": "509d1cc7395659520875e228304fbf95",
".git/objects/d9/b7a960e4faf5f649e511cb3f3c4dbd4011d0fe": "099dd14eed48cc97f42a9dce97cd53cc",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/ae74d9ff299d9be7ba56df340275d3729b8d51": "cdad2020d4e9bf930f93fee9ea8853d6",
".git/objects/be/07bb8879629703b0fa59b4297f9a5adbbc9ee9": "1e206ba1464bb32e41cf001befcf2228",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4466c2ad301a788eddb7d041d2030fa2a2a63b": "ec85675489d310d0d2684f8453035d54",
".git/objects/e5/217fa51b0aa0811122a1813b116e37eed86ff6": "b24bd17ad46396f68e6f418d8c27dc79",
".git/objects/e5/6d4319b6c2da843b7abc2cc270f00027b91bef": "3f21fa39a78053cffe7404746bfa8754",
".git/objects/e2/b83983cd96ca9df941f881e4a7e6f5f4c6aa2d": "fb4f296ad0dca578798e35c022312ff5",
".git/objects/e2/23f88cb41a332bb30c368638cfa5487cd8824e": "dc1595e1f2bef9079ce944b5f00b2f6c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/74e8fc37f83a8a48177ed93ad14f0ec0b83258": "c11f8171bd582108b7daceb2efc5e27c",
".git/objects/c7/e6db518929aad5d58ad2cd0da3d995f7b323ba": "e55706bb08d326a7be3d0a2070f78d87",
".git/objects/c7/4518541fc9bde445662dff79f28cfd3191f66e": "703071f90a79685cb4fcc9cabe2e5780",
".git/objects/c7/6572847963a4d50eb5fd76f8882683db745605": "5ab94dd199b7331976d447dd51f2829b",
".git/objects/e3/32847a0f136d5c55f93c1c10d64ee0996e29b9": "907bdbc148098469cb70263734008dca",
".git/objects/cf/f2f17d20fa36c78bdc1b771f475f63dc246764": "2f0a81b468f3b4b5d753dde7b3213c14",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/85fc35ffc5fff6a71507c231130615af3e03e6": "3c774a872037b0e74c1d551a37e6e124",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/c6/7944eea8f7c7ee06f55452ec5f87cb63eb0ac8": "1cc01224629730c80cebdabc2df48a2f",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/4e/1c65dae2ab59705ec84eeef3f2f01378efea9c": "9565065e01cba9b1607fbee377adb20c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b4c1ef4f3d14d1ebb6bf07dbc7acb7fba8015b": "6457d48daf537d2cf230cafd590342e4",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/29/017d2c2a6fea5d497106d2c713f93abda78b26": "639de2512a197dd50d64faa69e95ba63",
".git/objects/29/217456218313d587df2a3ec95dcbd51cf70adc": "b6e73e5c92d555f49647be2dab98811e",
".git/objects/7c/996498b472142bd0d8d661ac54b67218a6a412": "f896da0d5372f584fac1867d8c37575d",
".git/objects/1f/33346765907a8dc610f38bd322717fafb83b2a": "b9e76ee86ccf54cb7a43812052271936",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/6cbd722d02e8e3c2e6c98d72e211244803867b": "5e24aab42cfa43436c799a8301dd75e9",
".git/objects/17/43ff709a80fb8c835c553c5a803420ce23e251": "3b192b25b9fc020b6242ba83e96dfc12",
".git/objects/7b/2e70b299eab0d133fca27a500bd0d319b912b4": "22a496c0bc7ca005d89011452b0338f8",
".git/objects/8f/ea0f9789d2ed9f9c018f31273c7b0a261a3949": "11f626499e1e02c81f8b23f43f0bf831",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/4d75287e37ebccfc8afbb6919cd2fde044ded1": "df91b03848d3b1f34cb4dbf430d7cd6f",
".git/objects/4c/50bfeedf16557b0e802f6c0f33568d843f8aa3": "34e608f493afafb7298859f51c52c4a9",
".git/objects/21/e0304c90d1aaab09ff575337c0725398c0ce61": "d07a3600b29673f0c1b936b604b468cf",
".git/objects/4d/4d60a0906c772e825be74f3e447e421d5830cd": "4935a11a5edf84a231ccde5f6a4fa37b",
".git/objects/4d/cf7e73d8b740be4f871c3ad66c13464565af44": "4c3dd70214b92ff20b2b4f68829b2ad8",
".git/objects/81/4a7a8065e40a32b1b04cf01ddcab29b3f7a0ea": "8804e6a79fb7675f6c83364d8f1a697b",
".git/objects/81/d36e1ffb16a9077106f0a0775b003f891f0c1e": "3bb3ff8c05796054178fc55c31c9c93b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/5842d64737776fe11e6892c9dd1b17073172a2": "d2fef2214d2ef28f7d17067491d7a65c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/09/88f9f237682506034ba30f9f9fdecabfe8d584": "8a69ff8b292c6167744650581b193960",
".git/objects/5d/0934d1c3888d0230cf512c34eb9c48e67b6e0c": "3aa42cc28997e010dc48ad154a691cfd",
".git/objects/96/1e895c4cc42872b44bed8e05e9b9fa0e6527ea": "d5d7f0481adfa4ce020dcf6e5b53bc7e",
".git/objects/3a/5e005b17e34216010450ba50eaa8e9adb53e58": "c5101291fca7deee2aeb9fa103d1a6a8",
".git/objects/98/bfb049ceb33ef8ba5a9fdc3b1cb1401f51a83a": "6183c6fd985cc431d5d42a13f201206f",
".git/objects/01/e1584f4be167ae2f45f1e92fe0b48c9aabd52d": "3c71d88abd116f8e3ca702c4448383e9",
".git/objects/06/27e846d0a3a5586f7c7a31c0c1bec9e680ef4d": "2f89043601022d9b005736859fe774ad",
".git/objects/52/84015bff15f480d93cbdaf0568c6dab620ab86": "37f6527a5f24e96cd19c64de6408f2a7",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/97/fec28065924ebce0e725828fa7db5b95b7ab16": "1d2ff40c950fa8681d784a9e33823ea2",
".git/objects/0f/7aa4eca48cecfed57f4cc9579833d1cfe5fb23": "81c9513213f25c51f4bcdc5fbefcb7ee",
".git/objects/d4/3ff044f6ba34ab9b8496c04f143d7b89e37ce3": "d0b9c3019f97db42ba525ad5f648a327",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/b5b252506b6b98197b84fee1a8c30b689aed1e": "1ad72c6fae2a6c3ad8648c0bb63c0cee",
".git/objects/b1/b8ed181a35330dccfb78b0bc3baa85dce60607": "b8f0b1d96cddc6f816e488baaa0d1eec",
".git/objects/d5/d15beca2902d7a2a6c23a601847204331365b8": "ceecdda0d95f6392e893988ca1d35ac8",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d5/c5a4fac30aa19ba7eb5cafc2be1ce588482d88": "bb3474f4a138fd4480d99738a3a987fe",
".git/objects/d2/67322f074a5afa51dd0d71ba6544e136f6960c": "f198e2956026838248c9122ab00c06f7",
".git/objects/d2/bf9b8e04a351196789b5a52ed93ce1e9b6fbab": "70874987504eaf2ea62d73be676a63c1",
".git/objects/af/4bdb5ddb769741c40e6f1d52cb1b80663b59df": "2441c977e141b9e8d6d9cbf126c67c08",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/f45ff00dfb65981524e6bbd1138ab8628b4be3": "c167ce4f4007dd4bb11874a56a6e082e",
".git/objects/de/b38729899570eb364401f8dcdcd6cc15531090": "0ea78ecfb0de66141eaa0ccdae69729a",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/ec7e2703dad1b9814a053662f070a238038e1e": "6ce087cccaa6948e7d145e54a9815271",
".git/objects/cd/fcd2654114a88a938cf4d82fb2735a2ac96e95": "434ea141ebaf2b02a16d313669d2296a",
".git/objects/cd/434dd93ff39073ce77979bf88c70bfe0a29e45": "a2ea1770762fd9d8d8ac0390641192a3",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/cb/6643723b64199eb7367ad7a3d6028a798c421c": "e4854d94564a0beff3f4c8f95dd388e2",
".git/objects/cb/d8c3dcccda50a57366056857a1d4927fb9c8ac": "e738c5f1f5d95bcbb907db54cf15c982",
".git/objects/e0/028d2e8871227cea8396a7dc14560e4913d37a": "2889f67f20f7d2572f3ca120e434e98c",
".git/objects/e0/1ba31dfe51079ad4cc0bea12733bd1fdfdc33e": "cbc6ce55c5a1cf4525a98a67470696a1",
".git/objects/e0/d3d2ea5a270a29346372106781d1d6a0a77a46": "d301f45759db725498010a830c7d42e0",
".git/objects/46/e38791a9ee55b4d8741728cfaf647bf4e8dede": "6541c37ff9680bcabc3f9e16aac30a67",
".git/objects/79/c2d0e9a875030f31cc60ab60197055009e16fb": "b1350a93f907f8f0bcf4c2ef2bbf6e57",
".git/objects/83/39fe3f25f43b369d9e2d06a3de5151f105f9bb": "842cddff4ccd8b59dba99eba6b7a4da2",
".git/objects/1b/561f562cad0348dd0b01b76e1606e41bf3509a": "772cc1543e6889a74471d0209ac5d67b",
".git/objects/1b/d54417a91ee63225a256747a4845881a2f7b1e": "62bb308e9bfccc1f46ad54b44cce6668",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/a51aab6e0df7536ef8977e2b653813bee00d84": "62d17c21410092773c2e8bbdd9bc28c8",
".git/objects/84/207c8804befbc5b3755a11e59155ec938fadc8": "900ffe1b76f249655ba7e41161556e5d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/15/2660811849e098354f25a5c609ab4eca1f4124": "7873a41191169fde638dd7d9d22a4374",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/aa374b34e4075f987a1f7cf17e3aa544b36eb5": "1db2dba483bbbc39e8aa2976bcc8439a",
".git/objects/40/5918b10a118fa54d834d4c3fadea3a6bcf9c1c": "bc38be73e50892810165cb3257e9c654",
".git/objects/2b/9af5a91dee4fd653808eb7536a9d972d938a0f": "c827617b8e3336a1e3d588ffc67b8f42",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/7f/823e27bf29fbdb06be64dbb8e37f171188f3ef": "5917ae89122e2378109aa4a38f077e12",
".git/objects/25/37c4861d14938386f8fd389904dd72b3f8bf9f": "6cc183743aa5e1a389949a1daf94d838",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad4fe5cf74cd619ae90c76c117b70833",
".git/logs/refs/heads/main": "15553498884e2dbfe50feb3e6cf43fa5",
".git/logs/refs/remotes/origin/main": "a7df7166721a78dbbc6576657a9dce65",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "18901a02dd6d1ef19760216ceb4884a5",
".git/refs/remotes/origin/main": "18901a02dd6d1ef19760216ceb4884a5",
".git/index": "fb37132e125bedfaff74772aa27238e5",
".git/COMMIT_EDITMSG": "8b67fa539887a3967856a3a4035a4d88",
"assets/AssetManifest.json": "504a7ad1340971ed8c86456f3998fd94",
"assets/NOTICES": "02024609626cac40e385842ac2ad99c2",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "044ca2380599d1c7d7d5e0ca3da611c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "3edd9c53b1c9756e6ebbdf55faf84448",
"assets/fonts/MaterialIcons-Regular.otf": "268504443d8268eb62a6555c9a081cf2",
"assets/assets/python.webp": "19e43c1141b4f35fc9aae15f8df1ecc6",
"assets/assets/etlprjt.webp": "8cd8ec79a1b44f8a76b52ef0c9363ea2",
"assets/assets/tableau.png": "863588a71e465cc3aa5d822c0feafea9",
"assets/assets/sas.png": "e53d145e39d06f995c6f097199165a95",
"assets/assets/scala.png": "2240044fb9784e07ee0a970e2179c502",
"assets/assets/shell.png": "099a3281c2e6d4b650d28c6ac8a23df3",
"assets/assets/torch.png": "680c62e37d01cbb3ea0220c486fe4e32",
"assets/assets/sql.png": "6ef42a8da411c603c041dbad54d6fc1d",
"assets/assets/firebase.png": "9ad79828751ede5dbe9f92f97237bdf2",
"assets/assets/java.png": "1b23abb12b6329b30a65e0a3256892e2",
"assets/assets/powerbi.png": "ccf1352516c9b804dea9c5775cb58762",
"assets/assets/AWB.jpeg": "b38d9fbbb2586da012b429b68a50bd1d",
"assets/assets/metabase.png": "e234a20c5dd127eadbfc9f4ee87b652a",
"assets/assets/background.jpg": "cfc26f2e47a371c589136ff9d9d098fd",
"assets/assets/ocr.jpg": "2dba5d2766e877b7584e837b35f2af32",
"assets/assets/finea.jpeg": "39cf5f1a17fd0a29a6c6d61b7422ffa8",
"assets/assets/sqlserver.png": "69e2af65dc05f920414202f0dcfcca54",
"assets/assets/me.jpeg": "69eadc0e65c18f2aa1500cfd8d9169bb",
"assets/assets/classification.jpeg": "78e468f7264b814a6b09619e97b51198",
"assets/assets/hive.png": "07ebbb49861790fd67bb3744296feced",
"assets/assets/mysql.png": "07c28adf28e0592b46094aef81fcc655",
"assets/assets/me-removebg.png": "baa7115df7fc2e9e0c82039a58fbd6e0",
"assets/assets/pentaho.png": "6074546ba5c78f7975bcac5a718be385",
"assets/assets/pca.jpeg": "ddbc0a786be7358850ceb6b0bfddd1e5",
"assets/assets/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/Postgre.png": "341cc3b6a7361dc2232b2659db85efda",
"assets/assets/centos.png": "00327788374f2fee57bfeca2a857381c",
"assets/assets/chatbot.jpg": "180cd513ef615743ecf336006d76dcd8",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
