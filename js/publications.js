// 学术发表管理脚本 - 整洁排版版
document.addEventListener('DOMContentLoaded', function() {
    // ==============================
    // 1. 论文数据定义
    // ==============================
    const publications = [

        {
            id: 37,
            title: "Tetragonal SnOFeSe: A possible parent compound of the FeSe-based superconductor",
            authors: "Xiao-Xiao Man, Pei-Han Sun, Jian-Feng Zhang, Zhong-Yi Lu, and Kai Liu",
            year: "2023",
            journal: "Physical Review B",
            volume: "107(4), 045145 (2023)",
            category: "prb",
            abstract: "本文通过第一性原理计算提出了一种稳定的SnOFeSe化合物，其结构与电子性质与LaOFeAs高度相似，且处于金属-绝缘体转变的边缘，为研究FeSe衍生材料中磁性、电子关联与非常规超导的相互作用提供了一个新的潜在母体平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.045145#supplemental",
                arxiv: "https://arxiv.org/abs/2210.08146",
                code: null
            }
        },
        {
            id: 38,
            title: "Self-Intercalated 1T-FeSe<sub>2</sub> as an Effective Kagome Lattice",
            authors: "Zhi-Mo Zhang, Ben-Chao Gong, Jin-Hua Nie, Fanqi Meng, Qinghua Zhang, Lin Gu, Kai Liu, Zhong-Yi Lu, Ying-Shuang Fu, and Wenhao Zhang",
            year: "2023",
            journal: "Nano Letters",
            volume: "23(3), 954 (2023)",
            category: "nl",
            abstract: "本文报道了一种通过分子束外延将Fe原子自插层到FeSe<sub>2</sub>范德瓦尔斯间隙中以构建人工Kagome晶格的合成策略，并结合扫描隧道显微镜与理论计算揭示了其Kagome图案主要源于插层诱导的顶层Se原子重构，为探索关联量子态提供了可调控的新平台。",
            links: {
                pdf: "https://pubs.acs.org/doi/10.1021/acs.nanolett.2c04362",
                arxiv: null,
                code: null
            }
        },
        {
            id: 39,
            title: "Intrinsic ferromagnetic axion states and single pair of Weyl fermions in the stable-state MnX<sub>2</sub>B<sub>2</sub>T<sub>6</sub> family of materials",
            authors: "Yan Gao, Weikang Wu, Ben-Chao Gong, Huan-Cheng Yang, Xiang-Feng Zhou, Yong Liu, Shengyuan A. Yang, Kai Liu and Zhong-Yi Lu",
            year: "2023",
            journal: "Physical Review B",
            volume: "107(4), 045136 (2023)",
            category: "prb",
            abstract: "本文提出了一类新型的稳定结构MnX<sub>2</sub>B<sub>2</sub>T<sub>6</sub>-B家族材料，其中发现了本征铁磁轴子绝缘体MnGe<sub>2</sub>Bi<sub>2</sub>Te<sub>6</sub>-B、MnSn<sub>2</sub>Bi<sub>2</sub>Te<sub>6</sub>-B、MnPb<sub>2</sub>Bi<sub>2</sub>Te<sub>6</sub>-B以及仅含单对Weyl点的本征Weyl半金属MnSn<sub>2</sub>Sb<sub>2</sub>Te<sub>6</sub>-B，为探索拓扑磁电效应和Weyl点相关本征特性提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.107.045136",
                arxiv: "https://arxiv.org/abs/2210.09538",
                code: null
            }
        },
        {
            id: 40,
            title: "Framework for Contrastive Learning Phases of Matter Based on Visual Representations",
            authors: "Xiao-Qi Han, Sheng-Song Xu, Zhen Feng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2023",
            journal: "Chinese Physics Letters",
            volume: "40(2), 027501 (2023)",
            category: "cpl",
            abstract: "本文提出了一个受视觉表示对比学习启发的简单框架SimCLP，用于对比学习物态相，并在经典与量子、单粒子与多体、常规与拓扑等多个代表性体系中验证了其成功应用，为识别未知相变提供了无需人工特征工程和先验知识的通用工具开发新途径。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0256-307X/40/2/027501/meta",
                arxiv: "https://arxiv.org/abs/2205.05607",
                code: null
            }
        },
        {
            id: 41,
            title: "Magnetization-induced phase transition from a semimetal to a Chern insulator in monolayer VGa<sub>2</sub>Te<sub>4</sub>",
            authors: "Ben-Chao Gong, Yan Gao, Xiao-Le Qiu, Ning-Ning Zhao, Kai Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review B",
            volume: "106(23), 235153 (2022)",
            category: "prb",
            abstract: "本文通过密度泛函理论计算设计并研究了一类新型XZ<sub>2</sub>T<sub>4</sub>化合物，其中发现α-VGa<sub>2</sub>Te<sub>4</sub>单层具有可调控的拓扑性质，能够从无能隙的铁磁半金属转变为具有10 meV全局带隙的量子反常霍尔绝缘体，为超越MnBi<sub>2</sub>Te<sub>4</sub>家族探索更多量子反常霍尔绝缘体提供了实例。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.235153",
                arxiv: null,
                code: null
            }
        },
        {
            id: 42,
            title: "Two-dimensional Dirac-line semimetals resistant to strong spin–orbit coupling",
            authors: "Deping Guo, Pengjie Guo, Shijing Tan, Min Feng, Limin Cao, Zheng-Xin Liu, Kai Liu, Zhong-Yi Lu, and Wei Ji",
            year: "2022",
            journal: "Science Bulletin",
            volume: "67(19), 1954 (2022)",
            category: "sci-bull",
            abstract: "本文发现并证明具有<em>p</em><sub><em>mma</em></sub>层群（含<em>Ĉ</em><sub>2<em>x</em></sub>×<em>Z</em><sub>2</sub><sup><em>T</em></sup>子群）非共线对称性可以确保二维狄拉克节线半金属态在强自旋轨道耦合下保持稳定，并在VA族元素（Bi、Sb、As、P）的砖状结构相中实现了这类受对称性保护的纯净狄拉克节线态。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S2095927322004157?via%3Dihub",
                arxiv: null,
                code: null
            }
        },
        {
            id: 43,
            title: "Strong-coupling superconductivity in the kagome metal CsV<sub>3</sub>Sb<sub>5</sub> revealed by soft point-contact spectroscopy",
            authors: "Ming-chong He, Hai Zi, Hong-xing Zhan, Yu-qing Zhao, Cong Ren, Xing-yuan Hou, Lei Shan, Qiang-hua Wang, Qiangwei Yin, Zhijun Tu, Chunsheng Gong, Hechang Lei, Zhong-Yi Lu, Qi Wang, Yan-peng Qi, Gen-fu Chen, and Peng Xiong",
            year: "2022",
            journal: "Physical Review B",
            volume: "106(10), 104510 (2022)",
            category: "prb",
            abstract: "本文通过软点接触谱与电阻测量研究了Kagome超导体CsV<sub>3</sub>Sb<sub>5</sub>的超导序参量，揭示了其强耦合双能隙（<em>s</em>+<em>s</em>波）超导特性，并指出费米面附近的平带相关的范霍夫奇点与电子关联性在Kagome超导电性起源中起关键作用。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.104510",
                arxiv: null,
                code: null
            }
        },
        {
            id: 44,
            title: "Magnetic Surface on Nonmagnetic Bulk of Electride Hf<sub>2</sub>S",
            authors: "Jian-Feng Zhang, Duo Xu, Xiao-Le Qiu, Ning-Ning Zhao, Zhong-Yi Lu, and Kai Liu",
            year: "2023",
            journal: "Journal of Physical Chemistry C",
            volume: "127(1), 696 (2023)",
            category: "jpcc",
            abstract: "本文通过第一性原理计算结合Kubo公式方法研究了二维电子化物Hf<sub>2</sub>S在单层与多层结构中的电子、磁性和输运性质，揭示了其非磁体内部与自旋极化的表面电子气共存的独特磁性表面特性，并预测了由此产生的表面反常霍尔效应和电场诱导的层霍尔效应等新奇输运现象。",
            links: {
                pdf: "https://pubs.acs.org/doi/10.1021/acs.jpcc.2c07271",
                arxiv: "https://arxiv.org/abs/2207.07042",
                code: null
            }
        },
        {
            id: 45,
            title: "Symmetry-enforced two-dimensional Dirac node-line semimetals",
            authors: "Peng-Jie Guo, Chen Peng, Zheng-Xin Liu, Kai Liu, and Zhong-Yi Lu",
            year: "2023",
            journal: "Materials Futures",
            volume: "2(1), 011001 (2023)",
            category: "mat-fut",
            abstract: "本文通过对称性分析和晶格模型计算证明狄拉克节线可在二维非磁及反铁磁系统中稳定存在，并确定了一系列能够强制产生狄拉克节线的空间群与磁空间群，同时通过第一性原理计算预测单层YB<sub>4</sub>C<sub>4</sub>是研究二维对称性强制狄拉克节线半金属新奇特性的理想材料平台。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/2752-5724/aca816",
                arxiv: null,
                code: null
            }
        },
        {
            id: 46,
            title: "An experimental setup with controllable tuning parameters for studying the Kondo systems",
            authors: "Zhong-Yi Lu",
            year: "2022",
            journal: "Science China Physics, Mechanics & Astronomy",
            volume: "65(4), 246831 (2022)",
            category: "sci-china-phys",
            abstract: "本文评述了一种基于自组装有序相的新型实验装置，该装置可通过调控分子间距连续调节RKKY相互作用，从而系统研究双杂质近藤模型中集体近藤单态与RKKY单态之间的演变过程，为近藤物理的深入研究提供了重要的实验平台。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/s11433-022-1882-1",
                arxiv: null,
                code: null
            }
        },
        {
            id: 47,
            title: "Green's function Monte Carlo method combined with restricted Boltzmann machine approach to the frustrated J<sub>1</sub>–J<sub>2</sub> Heisenberg model",
            authors: "He-Yu Lin, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2022",
            journal: "Chinese Physics B",
            volume: "31(8), 080203 (2022)",
            category: "cpb",
            abstract: "本文提出将受限玻尔兹曼机作为引导波函数与格林函数蒙特卡洛方法相结合的策略，并应用于具有符号问题的受挫J<sub>1</sub>–J<sub>2</sub>海森堡模型，结果表明该方法能显著降低基态能量的相对误差，为解决更复杂的符号问题模型提供了有效途径。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/1674-1056/ac615f",
                arxiv: null,
                code: null
            }
        },
        {
            id: 48,
            title: "Van Hove singularity induced phonon-mediated superconductivity above 77 K in hole-doped SrB<sub>3</sub>C<sub>3</sub>",
            authors: "Ting-Ting Gai, Peng-Jie Guo, Huan-Cheng Yang, Yan Gao, Miao Gao, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(22), 224514 (2022)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了空穴掺杂化合物Rb<sub>0.4</sub>Sr<sub>0.6</sub>B<sub>3</sub>C<sub>3</sub>的电子结构、晶格动力学及电声耦合，发现其通过将费米能级调至范霍夫奇点并在软声子协同作用下实现了高于液氮温度（83 K）的声子介导超导电性，且存在单能隙向双能隙超导的转变。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.224514",
                arxiv: null,
                code: null
            }
        },
        {
            id: 49,
            title: "Intrinsic ferromagnetic and antiferromagnetic axion insulators in van der Waals materials MnX<sub>2</sub>B<sub>2</sub>T<sub>6</sub> family",
            authors: "Yan Gao, Kai Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review Research",
            volume: "4(2), 023030 (2022)",
            category: "prr",
            abstract: "本文通过第一性原理计算设计了一类基于X<sub>2</sub>B<sub>2</sub>T<sub>5</sub>结构的新型范德瓦尔斯材料MnX<sub>2</sub>B<sub>2</sub>T<sub>6</sub>家族，并发现其中同时存在铁磁与A型反铁磁轴子绝缘体，为超越MnBi<sub>2</sub>Te<sub>4</sub>家族实现高温量子反常霍尔效应和量子化磁电效应提供了新平台。",
            links: {
                pdf: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.4.023030",
                arxiv: "https://arxiv.org/abs/2111.11749",
                code: null
            }
        },
        {
            id: 50,
            title: "Large intrinsic spin Hall conductivity and spin Hall angle in the nodal-line semimetals ThAl<sub>2</sub> and ThGa<sub>2</sub>",
            authors: "Ning-Ning Zhao, Kai Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(23), 235119 (2022)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了ThAl<sub>2</sub>与ThGa<sub>2</sub>的电子结构与拓扑性质，揭示了其费米面附近的多重节线在自旋轨道耦合打开后产生巨大自旋贝里曲率，从而诱导出巨大的本征自旋霍尔电导与自旋霍尔角，为自旋轨道电子学器件应用提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.235119",
                arxiv: null,
                code: null
            }
        },
        {
            id: 51,
            title: "First-principles study on the magnetic and electronic properties of the high-pressure orthorhombic phase of MnSe",
            authors: "Xiao-Xiao Man, Ben-Chao Gong, Pei-Han Sun, Kai Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review B",
            volume: "106(3), 035136 (2022)",
            category: "prb",
            abstract: "本文通过自旋极化密度泛函理论计算研究了高压正交相MnSe的磁性与电子性质，揭示了其在AFM3态与一系列交错的<em>n</em>-聚体反铁磁态之间存在强烈的反铁磁涨落，为理解MnSe作为第二种Mn基超导体的母体特性提供了理论线索。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.035136",
                arxiv: null,
                code: null
            }
        },
        {
            id: 52,
            title: "Two-dimensional anisotropic Dirac materials PtN<sub>4</sub>C<sub>2</sub> and Pt<sub>2</sub>N<sub>8</sub>C<sub>6</sub> with quantum spin and valley Hall effects",
            authors: "Jingping Dong, Chuhan Wang, Xinlei Zhao, Miao Gao, Xun-Wang Yan, Fengjie Ma, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review Materials",
            volume: "6(7), 074202 (2022)",
            category: "prm",
            abstract: "本文通过第一性原理计算提出了两种新型二维拓扑狄拉克材料平面PtN<sub>4</sub>C<sub>2</sub>和Pt<sub>2</sub>N<sub>8</sub>C<sub>6</sub>，它们具有位于费米能级的各向异性狄拉克锥，并在自旋轨道耦合下成为量子自旋霍尔与量子能谷霍尔绝缘体，为探索二维拓扑量子器件提供了新途径。",
            links: {
                pdf: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.6.074202",
                arxiv: "https://arxiv.org/abs/2207.03703",
                code: null
            }
        },
        {
            id: 53,
            title: "A two-dimensional topological nodal-line material MgN<sub>4</sub> with extremely large magnetoresistance",
            authors: "Xinlei Zhao, Dapeng Liu, Miao Gao, Xun-Wang Yan, Fengjie Ma, and Zhong-Yi Lu",
            year: "2022",
            journal: "Nanoscale",
            volume: "14(38), 14191 (2022)",
            category: "nanoscale",
            abstract: "本文通过第一性原理计算预测了一种稳定的二维原子薄层材料MgN<sub>4</sub>，它具有完美的本征电子-空穴补偿特性与高载流子迁移率，可实现不饱和的极大磁阻效应，同时其在自旋轨道耦合下表现为拓扑绝缘体，为设计新型多功能器件提供了理想平台。",
            links: {
                pdf: "https://pubmed.ncbi.nlm.nih.gov/36125028/",
                arxiv: null,
                code: null
            }
        },
        {
            id: 54,
            title: "Distinct superconducting behaviors of pressurized WB<sub>2</sub> and ReB<sub>2</sub> with different local B layers",
            authors: "Cuiying Pei, Jianfeng Zhang, Chunsheng Gong, Qi Wang, Lingling Gao, Yi Zhao, Shangjie Tian, Weizheng Cao, Changhua Li, Zhong-Yi Lu, Hechang Lei, Kai Liu, and Yanpeng Qi",
            year: "2022",
            journal: "Science China Physics, Mechanics & Astronomy",
            volume: "65(8), 287412 (2022)",
            category: "scpma",
            abstract: "本文通过高压实验与理论计算系统研究了具有不同硼层结构的WB<sub>2</sub>与ReB<sub>2</sub>的超导行为，发现WB<sub>2</sub>在高压下出现超导电性而ReB<sub>2</sub>则无，揭示了硼层的几何构型对过渡金属二硼化物中超导转变温度的关键影响。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/s11433-022-1911-x",
                arxiv: null,
                code: null
            }
        },
        {
            id: 55,
            title: "Superconductivity in monolayer Ba<sub>2</sub>N electride: a first-principles study",
            authors: "Xiao-Le Qiu, Jian-Feng Zhang, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(16), 165101 (2022)",
            category: "prb",
            abstract: "本文通过第一性原理计算系统研究了二维电子化物Ba<sub>2</sub>N单层的电子与超导性质，发现其具有3.4 K的超导转变温度，并可通过拉伸应变显著提升至10.8 K，揭示了晶格应变通过调控电子分布影响电声耦合的机制。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.165101",
                arxiv: "https://arxiv.org/abs/2203.15669",
                code: null
            }
        },
        {
            id: 56,
            title: "Magnetic and electronic transitions in monolayer electride Gd<sub>2</sub>C induced by hydrogenation: A first-principles study",
            authors: "Duo Xu, Jian-Feng Zhang, Zhong-Yi Lu, and Kai Liu",
            year: "2022",
            journal: "Physical Review B",
            volume: "106(4), 045138 (2022)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了二维电子化物Gd<sub>2</sub>C单层的磁性与电子性质，发现氢化可有效调控其物态：单面全氢化使其转变为半金属，双面全氢化则使其转变为带隙0.8 eV的反铁磁绝缘体，为未来电子与自旋电子器件应用提供了多功能材料平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.045138",
                arxiv: null,
                code: null
            }
        },
        {
            id: 57,
            title: "Two-dimensional quadratic double Weyl semimetal",
            authors: "Xinlei Zhao, Fengjie Ma, Peng-Jie Guo, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review Research",
            volume: "4(4), 043183 (2022)",
            category: "prr",
            abstract: "本文基于对称性分析与第一性原理计算预测了Si/Bi范德瓦尔斯异质结是一种在强自旋轨道耦合下稳定的二维非常规二次双外尔半金属，并揭示了其源于Rashba SOC与邻近效应增强的本征SOC之间的竞争，为研究二维双外尔半金属及其他新奇拓扑物相提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.4.043183",
                arxiv: "https://arxiv.org/abs/2207.03044",
                code: null
            }
        },
        {
            id: 58,
            title: "Evolution of ultra-flat band in van der Waals kagome semiconductor Pd<sub>3</sub>P<sub>2</sub>(S<sub>1−x</sub>Se<sub>x</sub>)<sub>8</sub>",
            authors: "Shaohua Yan, Ben-Chao Gong, Lin Wang, Jinzhi Wu, Qiangwei Yin, Xinyu Cao, Xiao Zhang, Xiaofeng Liu, Zhong-Yi Lu, Kai Liu, and Hechang Lei",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(15), 155115 (2022)",
            category: "prb",
            abstract: "本文研究了范德瓦尔斯Kagome半导体Pd<sub>3</sub>P<sub>2</sub>(S<sub>1−x</sub>Se<sub>x</sub>)<sub>8</sub>随Se掺杂的结构、光学与电子结构演化，揭示了Se掺杂通过增强层间耦合调控平带性质，并在二维极限下形成超平带，为探索二维Kagome晶格中的平带奇异物理提供了模型体系。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.105.155115",
                arxiv: "https://arxiv.org/abs/2111.11222",
                code: null
            }
        },
        {
            id: 59,
            title: "Eightfold Degenerate Fermions in Two Dimensions",
            authors: "Peng-Jie Guo, Yi-Wen Wei, Kai Liu, Zheng-Xin Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review Letters",
            volume: "127(17), 176401 (2021)",
            category: "prl",
            abstract: "本文通过对称性分析与晶格模型构建证明了八重简并费米子可在二维系统中实现，并通过第一性原理计算预测单层LaB<sub>8</sub>在合适衬底上可作为二维八重简并费米子与狄拉克节线半金属的理想研究平台。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.176401",
                arxiv: null,
                code: null
            }
        },
        {
            id: 60,
            title: "Erratum: Eightfold Degenerate Fermions in Two Dimensions ",
            authors: "Peng-Jie Guo, Yi-Wen Wei, Kai Liu, Zheng-Xin Liu, and Zhong-Yi Lu",
            year: "2022",
            journal: "Physical Review Letters",
            volume: "129(4), 049901 (2022)",
            category: "prl",
            abstract: "本文是对发表于《物理评论快报》第127卷第176401页（2021年）的论文《二维八重简并费米子》的正式更正说明，对原文中的计算细节、对称性分析或材料预测等若干内容进行了修正与澄清。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.176401",
                arxiv: null,
                code: null
            }
        },
        {
            id: 61,
            title: "Phonon-mediated high-temperature superconductivity in ternary borohydride KB<sub>2</sub>H<sub>8</sub> around 12 GPa",
            authors: "Miao Gao, Xun-Wang Yan, Zhong-Yi Lu, and Tao Xiang",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(10), L100504 (2021)",
            category: "prb",
            abstract: "本文基于第一性原理密度泛函理论计算，预测了一种新型三元硼氢化物KB<sub>2</sub>H<sub>8</sub>在约12 GPa压力下通过σ-杂化σ-键能带金属化并与声子强耦合，可实现134-146 K的高温超导电性，为在相对较低压力下探索富氢高温超导体提供了新方向。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.L100504",
                arxiv: "https://arxiv.org/abs/2106.07322",
                code: null
            }
        },
        {
            id: 62,
            title: "Phonon-mediated high-temperature superconductivity in ternary borohydride KB<sub>2</sub>H<sub>8</sub> under pressure near 12 GPa[Phys. Rev. B 104, L100504 (2021)]",
            authors: "Miao Gao, Xun-Wang Yan, Zhong-Yi Lu, and Tao Xiang",
            year: "2022",
            journal: "Physical Review B",
            volume: "105(5), 059901 (2022)",
            category: "prb",
            abstract: "本文基于第一性原理计算研究了一种由BH四面体嵌入面心立方钾晶格形成的三元硼氢化物KB<sub>2</sub>H<sub>8</sub>，发现在约12 GPa的中等高压下其σ-杂化σ-键能带金属化并与声子强耦合，预测其超导转变温度可达134-146 K，为在相对较低压力下实现富氢高温超导提供了新体系。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.L100504",
                arxiv: "https://arxiv.org/abs/2106.07322",
                code: null
            }
        },
        {
            id: 63,
            title: "First-principles study of the electronic structure of CaKRu<sub>4</sub>P<sub>4</sub>",
            authors: "Xinlei Zhao, Fengjie Ma, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(23), 235105 (2021)",
            category: "prb",
            abstract: "本文基于第一性原理计算系统研究了1144型四元化合物CaKRu<sub>4</sub>P<sub>4</sub>的电子结构，发现其具有与铁基超导体不同的电子特性，且在压力下可调控产生I型与II型狄拉克费米子，为研究拓扑物理与超导电性提供了一个潜在平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.235105",
                arxiv: "https://arxiv.org/abs/2109.10851v2",
                code: null
            }
        },
        {
            id: 64,
            title: "Large magnetoresistance and de Haas–van Alphen oscillations in the topological semimetal candidates BaX<sub>4</sub> (X=Ga, In)",
            authors: "Huan Wang, Sheng Xu, Xiao-Qin Lu, Zheng-Yi Dai, Yi-Yan Wang, Xiao-Yan Wang, Xiang-Yu Zeng, Jun-Fa Lin, Kai Liu, Zhong-Yi Lu, and Tian-Long Xia",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(20), 205119 (2021)",
            category: "prb",
            abstract: "本文通过磁阻、德哈斯-范阿尔芬振荡实验与第一性原理计算研究了拓扑半金属候选材料BaX<sub>4</sub>（X=Ga, In），观测到高达3×10<sup>3</sup>%与4×10<sup>4</sup>%的非饱和大磁阻，并揭示了其源于载流子补偿、高迁移率以及自旋轨道耦合下仍保持非平庸拓扑性质的狄拉克点特征。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.205119",
                arxiv: null,
                code: null
            }
        },
        {
            id: 65,
            title: "First-principles study of the double-dome superconductivity in the kagome material CsV<sub>3</sub>Sb<sub>5</sub> under pressure",
            authors: "Jian-Feng Zhang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(19), 195130 (2021)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了Kagome材料CsV<sub>3</sub>Sb<sub>5</sub>在高压下的电荷密度波态、超导电性与拓扑性质，提出其实验观测的双穹顶超导电性在低压下受V原子磁性的部分抑制而高压下为完全常规的BCS型超导，并预言了压力下可能存在的第二弱电荷密度波态与拓扑相变。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.195130",
                arxiv: "https://arxiv.org/abs/2106.11477",
                code: null
            }
        },
        {
            id: 66,
            title: "Magnetic correlation between two local spins in a quantum spin Hall insulator",
            authors: "Ru Zheng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(23), 235134 (2021)",
            category: "prb",
            abstract: "本文利用新发展的自然轨道重整化群方法研究了与螺旋边缘态耦合的两个Kondo杂质间的磁关联，发现自旋轨道耦合效应导致RKKY相互作用的各向异性，并揭示了通过调控Kondo耦合、杂质间距或SOC强度可实现面内与面外磁关联从铁磁到反铁磁的可控调节。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.235134",
                arxiv: "https://arxiv.org/abs/2201.06790",
                code: null
            }
        },
        {
            id: 67,
            title: "Three-dimensional acetylenic modified graphene for high-performance optoelectronics and topological materials",
            authors: "Yan Gao, Chengyong Zhong, Shengyuan A. Yang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "NPJ Computational Materials",
            volume: "7(1), 109 (2021)",
            category: "npj",
            abstract: "本文基于第一性原理计算提出了一类通过乙炔键连接不同石墨烯层构筑的三维碳网络新材料家族，其中既包含具有适宜直接带隙（1.07–1.87 eV）的高性能光电子/光伏半导体，也包含受时间反演与空间对称性保护的拓扑节环半金属，为多功能碳材料设计提供了新思路。",
            links: {
                pdf: "https://www.nature.com/articles/s41524-021-00579-5",
                arxiv: null,
                code: null
            }
        },
        {
            id: 68,
            title: "Modulating charge density wave states in TaSe<sub>2</sub> by an electride substrate",
            authors: "Xiao-Le Qiu, Jian-Feng Zhang, Ben-Chao Gong, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(16), 165109 (2021)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了典型电子化物Ca<sub>2</sub>N衬底对TaSe<sub>2</sub>中电荷密度波态的调控作用，发现Ca<sub>2</sub>N单层可均匀提供0.49电子/f.u.掺杂，从而完全抑制1H-TaSe<sub>2</sub>的CDW序，并使1T-TaSe<sub>2</sub>的CDW周期从“大卫之星”图案转变为√3×√3三角图案，为利用电子化物衬底调控CDW态提供了新途径。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.165109",
                arxiv: null,
                code: null
            }
        },
        {
            id: 69,
            title: "Inducing high-<em>T<sub>c</sub></em> ferromagnetism in the van der Waals crystal Mn(ReO<sub>4</sub>)<sub>2</sub> via charge doping: A first-principles study",
            authors: "Ben-Chao Gong, Huan-Cheng Yang, Jian-Feng Zhang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(7), 075133 (2021)",
            category: "prb",
            abstract: "本文基于密度泛函理论计算预测了具有起伏层状结构的Mn(ReO<sub>4</sub>)<sub>2</sub>在电荷注入或K插层等电子掺杂下，Re原子自旋极化可通过Mn-O-Re反铁磁超交换诱导Mn原子间的有效铁磁耦合，其居里温度可超过室温，为在含多类过渡金属的范德瓦尔斯材料中实现高温铁磁性提供了模板。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.075133",
                arxiv: null,
                code: null
            }
        },
        {
            id: 70,
            title: "First-principles study of the crystal structure, electronic structure, and transport properties of NiTe<sub>2</sub> under pressure",
            authors: "Jian-Feng Zhang, Yawen Zhao, Kai Liu, Yi Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(3), 035111 (2021)",
            category: "prb",
            abstract: "本文通过结构搜索与优化的第一性原理计算研究了高压下NiTe<sub>2</sub>的晶体结构、电子结构与输运性质，揭示了其在约10 GPa从层状P-3m1相转变为立方Pa-3相，并发现Pa-3相的霍尔电阻符号对压力与电荷掺杂敏感，为澄清实验观测差异提供了理论依据。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.035111",
                arxiv: "https://arxiv.org/abs/2107.05922",
                code: null
            }
        },
        {
            id: 71,
            title: "First-principles study of the superconductivity in LaO",
            authors: "Pei-Han Sun, Jian-Feng Zhang, Kai Liu, Qiang Han, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(4), 045121 (2021)",
            category: "prb",
            abstract: "本文通过第一性原理计算研究了岩盐结构LaO的电子结构、晶格动力学与电声耦合，揭示其超导配对属于常规BCS型且主要由重La原子的电子与声子贡献，并发现双轴拉伸应变与电子掺杂可协同提升其超导转变温度，为理解稀土二元氧化物超导体提供了理论依据。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.045121",
                arxiv: "https://export.arxiv.org/abs/2107.05898v1",
                code: null
            }
        },
        {
            id: 72,
            title: "Theoretical design of all-carbon networks with intrinsic magnetism",
            authors: "Yan Gao, Xiaolong Feng, Ben-Chao Gong, Chengyong Zhong, Shengyuan A. Yang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Carbon",
            volume: "177(15), 11 (2021)",
            category: "carbon",
            abstract: "本文基于第一性原理计算提出了一种受Ovchinnikov规则启发的普适性设计策略，通过乙炔键连接不同堆叠的石墨烯层构筑了一系列具有本征磁性的二维与三维全碳网络结构，并证实了双层ALBG-C<sub>14</sub>、三层ALTG-C<sub>22</sub>与块体IALG-C<sub>30</sub>等具体实例中存在的层内铁磁与层间反铁磁耦合半导体行为。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0008622321001755",
                arxiv: "https://arxiv.org/abs/2106.12158",
                code: null
            }
        },
        {
        "id": 109,
        "title": "Experimental observation of bulk nodal lines and electronic surface states in ZrB<sub>2</sub>",
        "authors": "Rui Lou, Pengjie Guo, Man Li, Qi Wang, Zhonghao Liu, Shanshan Sun, Chenghe Li, Xuchuan Wu, Zilu Wang, Zhe Sun, Dawei Shen, Yaobo Huang, Kai Liu, Zhong-Yi Lu, Hechang Lei, Hong Ding, Shancai Wang",
        "year": "2018",
        "journal": "npj Quantum Materials",
        "volume": "3(1), 43 (2018)",
        "category": "npj",
        "abstract": "本文通过角分辨光电子能谱结合第一性原理计算，从体态与表面两方面为ZrB<sub>2</sub>中的节线半金属态提供了确凿的实验证据，表明ZrB<sub>2</sub>可作为探索节线费米子诱导新奇物理现象的重要平台。",
        "badges":  [],
        "links": {
            "pdf": "https://www.nature.com/articles/s41535-018-0121-4",
            "arxiv": "https://arxiv.org/pdf/1805.00827",
            "code": null
        }
    },
    {
        "id": 110,
        "title": "Author Correction: Experimental observation of bulk nodal lines and electronic surface states in ZrB<sub>2</sub>",
        "authors":  "Rui Lou, Pengjie Guo, Man Li, Qi Wang, Zhonghao Liu, Shanshan Sun, Chenghe Li, Xuchuan Wu, Zilu Wang, Zhe Sun, Dawei Shen, Yaobo Huang, Kai Liu, Zhong-Yi Lu, Hechang Lei, Hong Ding, Shancai Wang",
        "year": "2018",
        "journal": "npj Quantum Materials",
        "volume": "3(1), 50 (2018)",
        "category": "npj",
        "abstract": "本文通过角分辨光电子能谱结合第一性原理计算，从体态与表面两方面为ZrB<sub>2</sub>中的节线半金属态提供了确凿的实验证据，表明ZrB<sub>2</sub>可作为探索节线费米子诱导新奇物理现象的重要平台。",
        "badges":  [],
        "links": {
            "pdf": "https://www.nature.com/articles/s41535-018-0124-1",
            "arxiv":  "https://arxiv.org/pdf/1805.00827",
            "code": null
        }
    },
    {
        "id": 111,
        "title": "An Anderson impurity interacting with the helical edge states in a quantum spin Hall insulator",
        "authors": "Ru Zheng, Rong-Qiang He, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Chinese Physics Letters",
        "volume": "35(6), 067301 (2018)",
        "category": "cpl",
        "abstract": "我们采用自然轨道重整化群方法，研究了量子自旋霍尔绝缘体螺旋边缘态与安德森杂质相互作用中局域自旋的屏蔽机制，揭示了单个活性自然轨道主导的屏蔽过程及近藤共振现象。",
        "badges": [],
        "links":  {
            "pdf": "https://iopscience.iop.org/article/10.1088/0256-307X/35/6/067301",
            "arxiv": "https://arxiv.org/pdf/2201.05308",
            "code": null
        }
    },
    {
        "id": 112,
        "title": "Giant and anisotropic many-body spin-orbit tunability in a strongly correlated kagome magnet",
        "authors": "Jia-Xin Yin, Songtian S. Zhang, Hang Li, Kun Jiang, Guoqing Chang, Bingjing Zhang, Biao Lian, Cheng Xiang, Ilya Belopolski, Hao Zheng, Tyler A. Cochran, Su-Yang Xu, Guang Bian, Kai Liu, Tay-Rong Chang, Hsin Lin, Zhong-Yi Lu, Ziqiang Wang, Shuang Jia, Wenhong Wang, M. Zahid Hasan",
        "year": "2018",
        "journal": "Nature",
        "volume": "562(1), 91 (2018)",
        "category": "nature",
        "abstract": "我们系统研究了kagome铁磁体Fe<sub>3</sub>Sn<sub>2</sub>的自旋-轨道耦合效应，通过矢量磁场扫描隧道显微技术发现其多体电子态呈现巨大向列性能量响应，并观测到电子关联主导的自发向列序，揭示了该体系受磁场调控的强关联拓扑物态特性。",
        "badges": [],
        "links": {
            "pdf": "https://www.nature.com/articles/s41586-018-0502-7",
            "arxiv": "https://arxiv.org/pdf/1810.00218",
            "code": null
        }
    },
    {
        "id": 113,
        "title": "Interaction-Induced Characteristic Length in Strongly Many-Body Localized Systems",
        "authors":  "Rong-Qiang He, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Chinese Physics Letters",
        "volume":  "35(2), 027101 (2018)",
        "category": "cpl",
        "abstract": "我们系统研究了多体局域化体系中的局域运动积分构建方法，发现相互作用会诱导出新的特征长度尺度，并严格证明了该尺度下本征态具有准乘积态结构，从而揭示了多体局域化相的非微扰特性与纠缠受限性质。",
        "badges":  [],
        "links": {
            "pdf": "https://iopscience.iop.org/article/10.1088/0256-307X/35/2/027101",
            "arxiv": "https://arxiv.org/pdf/1606.09509",
            "code": null
        }
    },
    {
        "id": 114,
        "title": "Dynamical Generation of Topological Masses in Dirac Fermions",
        "authors": "Yuan-Yao He, Xiao Yan Xu, Kai Sun, Fakher F. Assaad, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Physical Review B",
        "volume": "97(8), 081110 (2018)",
        "category": "prb",
        "abstract": "我们通过大规模无符号量子蒙特卡洛模拟，在强关联狄拉克半金属模型中首次发现了拓扑莫特绝缘体相，揭示了该相互作用驱动的拓扑态属于(2+1)维N=8手征伊辛普适类，实现了对理论预测的数值验证。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.081110",
            "arxiv": "https://arxiv.org/pdf/1705.09192",
            "code": null
        }
    },
    {
        "id": 115,
        "title": "The melilite-type compound (Sr<sub>1-x</sub>,A<sub>x</sub>)<sub>2</sub>MnGe<sub>2</sub>S<sub>6</sub>O (A=K, La) being a room temperature ferromagnetic semiconductor",
        "authors": "Huan-Cheng Yang, Ben-Chao Gong, Kai Liu, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Science Bulletin",
        "volume":  "63(14), 887 (2018)",
        "category": "scibull",
        "abstract": "我们基于第一性原理预测了melilite型硫氧化物Sr<sub>2</sub>MnGe<sub>2</sub>S<sub>6</sub>O通过空穴和电子掺杂可实现居里温度超过300K的高温铁磁半导体，为探索新型自旋电子学材料提供了有效途径。",
        "badges": [],
        "links": {
            "pdf": "https://www.sciencedirect.com/science/article/abs/pii/S2095927318302585",
            "arxiv": "https://arxiv.org/pdf/1804.04519",
            "code": null
        }
    },
    {
        "id": 116,
        "title": "Magnetic interactions in a proposed diluted magnetic semiconductor (Ba<sub>1-x</sub>K<sub>x</sub>)(Zn<sub>1-y</sub>Mn<sub>y</sub>)<sub>2</sub>P<sub>2</sub>",
        "authors": "Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2018",
        "journal":  "Chinese Physics B",
        "volume":  "27(6), 067103 (2018)",
        "category": "cpb",
        "abstract": "我们通过第一性原理计算系统研究了BaZn<sub>2</sub>P<sub>2</sub>基稀磁半导体的磁性相互作用，阐明了空穴掺杂通过p-d杂化诱导铁磁有序的机制，并揭示了压力对磁耦合强度的非单调调控规律。",
        "badges":  [],
        "links": {
            "pdf": "https://iopscience.iop.org/article/10.1088/1674-1056/27/6/067103",
            "arxiv": "https://arxiv.org/pdf/1804.04518",
            "code": null
        }
    },
    {
        "id": 117,
        "title": "Superconductivity in electron-doped arsenene",
        "authors": "Xin Kong, Miao Gao, Xun-Wang Yan, Zhong-Yi Lu, Tao Xiang",
        "year": "2018",
        "journal": "Chinese Physics B",
        "volume":  "27(4), 046301 (2018)",
        "category": "cpb",
        "abstract": "我们通过第一性原理计算系统研究了电子掺杂二维砷烯的超导性，揭示了其p<sub>z</sub>电子与K点A<sub>1</sub>声子强耦合可实现高达30.8K的超导转变温度，创下二维元素超导体新纪录。",
        "badges": [],
        "links": {
            "pdf": "https://iopscience.iop.org/article/10.1088/1674-1056/27/4/046301",
            "arxiv": "https://arxiv.org/pdf/1801.00545",
            "code": null
        }
    },
    {
        "id": 118,
        "title": "Extremely large magnetoresistance and high-density Dirac-like fermions in ZrB<sub>2</sub>",
        "authors": "Qi Wang, Peng-Jie Guo, Shanshan Sun, Chenghe Li, Kai Liu, Zhong-Yi Lu, Hechang Lei",
        "year": "2018",
        "journal": "Physical Review B",
        "volume":  "97(20), 205105 (2018)",
        "category": "prb",
        "abstract": "我们系统研究了拓扑节线半金属ZrB<sub>2</sub>单晶的输运性质，发现其具有超大磁阻效应和电子-空穴完美补偿特征，高密度载流子与非平庸贝里相位共同揭示了狄拉克节线费米子的存在。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.205105",
            "arxiv": "https://arxiv.org/pdf/1712.03362",
            "code": null
        }
    },
    {
        "id": 119,
        "title": "Triply degenerate nodal points in RERh<sub>6</sub>Ge<sub>4</sub> (RE=Y, La, Lu)",
        "authors": "Peng-Jie Guo, Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2018",
        "journal":  "Physical Review B",
        "volume": "98(4), 045134 (2018)",
        "category": "prb",
        "abstract": "我们基于空间群理论预测了RERh<sub>6</sub>Ge<sub>4</sub> (RE=Y, La, Lu)为三重简并拓扑半金属，其节点位于&Gamma;-A轴且接近费米面，为研究三重简并费米子提供了理想平台。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.98.045134",
            "arxiv":  "https://arxiv.org/pdf/1711.03370",
            "code": null
        }
    },
    {
        "id": 120,
        "title": "Extremely Large Magnetoresistance and Electronic Structure of TmSb",
        "authors": "Yi-Yan Wang, Hongyun Zhang, Xiao-Qin Lu, Lin-Lin Sun, Sheng Xu, Zhong-Yi Lu, Kai Liu, Shuyun Zhou, Tian-Long Xia",
        "year": "2018",
        "journal": "Physical Review B",
        "volume":  "97(8), 085137 (2018)",
        "category": "prb",
        "abstract": "我们系统研究了TmSb的磁输运性质与电子结构，结合量子振荡、角分辨光电子能谱及第一性原理计算，证实其具有电子-空穴补偿和高迁移率特征，其超大磁阻源于拓扑平庸的半金属性，而非能带反转或拓扑效应。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.085137",
            "arxiv":  "https://arxiv.org/pdf/1710.08241",
            "code": null
        }
    },
    {
        "id": 121,
        "title": "Tuning the magnetism of the top-layer FeAs on BaFe<sub>2</sub>As<sub>2</sub>(001): First-principles study",
        "authors": "Bing-Jing Zhang, Kai Liu, Zhong-Yi Lu",
        "year": "2018",
        "journal": "Physical Review B",
        "volume": "97(16), 165105 (2018)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了BaFe<sub>2</sub>As<sub>2</sub>(001)表面的磁性，发现其顶层FeAs的磁基态随表面终止原子不同而改变，且表面掺杂可显著调控自旋涨落，揭示了表面磁性对扫描隧道显微镜图像的关键影响。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.97.165105",
            "arxiv":  "https://arxiv.org/pdf/1708.00293",
            "code": null
        }
    },
    {
        "id": 122,
        "title": "Theoretical study of the pressure-induced topological phase transition in LaSb",
        "authors": "Peng-Jie Guo, Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2017",
        "journal": "Physical Review B",
        "volume":  "96(8), 081112 (2017)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了压力下LaSb的拓扑相变，发现其在3-4 GPa范围内保持电子-空穴补偿并发生拓扑转变，为探索拓扑性质在超大磁阻中的作用提供了理想平台。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.96.081112",
            "arxiv":  "https://arxiv.org/pdf/1706.04029",
            "code": null
        }
    },
    {
        "id": 123,
        "title": "Duality between the deconfined quantum-critical point and the bosonic topological transition",
        "authors": "Yan Qi Qin, Yuan-Yao He, Yi-Zhuang You, Zhong-Yi Lu, Arnab Sen, Anders W. Sandvik, Cenke Xu, Zi Yang Meng",
        "year": "2017",
        "journal": "Physical Review X",
        "volume": "7(3), 031052 (2017)",
        "category": "prx",
        "abstract": "我们通过量子蒙特卡洛模拟系统研究了二维共形场论中对偶性的数值验证，支持了非紧致CP<sup>1</sup>模型与QED<sub>3</sub>理论在临界点相图与指数上的对应关系，为强关联体系中的场论对偶提供了关键证据。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prx/abstract/10.1103/PhysRevX.7.031052",
            "arxiv": "https://arxiv.org/pdf/1705.10670",
            "code": null
        }
    },
    {
        "id": 124,
        "title": "Pair-checkerboard antiferromagnetic order in &beta;-Fe<sub>4</sub>Se<sub>5</sub> with &radic;5&times;&radic;5-ordered Fe vacancies",
        "authors": "Miao Gao, Xin Kong, Xun-Wang Yan, Zhong-Yi Lu, Tao Xiang",
        "year": "2017",
        "journal": "Physical Review B",
        "volume": "95(17), 174523 (2017)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了具有&radic;5&times;&radic;5铁空位有序的&beta;-Fe<sub>4</sub>Se<sub>5</sub>材料，发现其基态为配对棋盘反铁磁序，并揭示了该磁序与碱金属插层铁硒材料中受阻棋盘序的统一物理图像。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.174523",
            "arxiv":  "https://arxiv.org/pdf/1703.02240",
            "code": null
        }
    },
    {
        "id": 125,
        "title": "Type-II Dirac semimetals in the YPd<sub>2</sub>Sn class",
        "authors": "Peng-Jie Guo, Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2017",
        "journal": "Physical Review B",
        "volume": "95(15), 155112 (2017)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统预测了Heusler合金YPd<sub>2</sub>Sn家族中存在的洛伦兹破缺型狄拉克费米子，该材料体系同时具备超导特性，为探索超越传统狄拉克费米子的新奇物理（尤其是拓扑超导电性）提供了理想平台。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.155112",
            "arxiv": "https://arxiv.org/pdf/1612.07456",
            "code": null
        }
    },
    {
        "id": 126,
        "title": "Characterizing Many-Body Localization by Out-of-Time-Ordered Correlation",
        "authors": "Rong-Qiang He, Zhong-Yi Lu",
        "year": "2017",
        "journal": "Physical Review B",
        "volume":  "95(5), 054201 (2017)",
        "category": "prb",
        "abstract": "我们系统研究了多体局域化体系中的失序关联动力学，发现其长时间对数变化行为可作为特征标识，并提出以其热涨落作为序参量来精确刻画遍历-局域化相变的临界点与临界指数。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.95.054201",
            "arxiv": "https://arxiv.org/pdf/1608.03586",
            "code": null
        }
    },
    {
        "id": 127,
        "title": "Electronic structure of heavy fermion system CePt<sub>2</sub>In<sub>7</sub> from angle-resolved photoemission spectroscopy",
        "authors": "Bing Shen, Li Yu, Kai Liu, Shou-Peng Lyu, Xiao-Wen Jia, E. D. Bauer, J. D. Thompson, Yan Zhang, Chen-Lu Wang, Cheng Hu, Ying Ding, Xuan Sun, Yong Hu, Jing Liu, Qiang Gao, Lin Zhao, Guo-Dong Liu, Zu-Yan Xu, Chuang-Tian Chen, Zhong-Yi Lu, X J Zhou",
        "year": "2017",
        "journal": "Chinese Physics B",
        "volume":  "26(7), 077401 (2017)",
        "category": "cpb",
        "abstract": "我们通过高分辨率角分辨光电子能谱系统研究了重费米子材料CePt<sub>2</sub>In<sub>7</sub>的电子结构，实验观测到其清晰的二维费米面特征与较弱的能带重整化效应，为理解铈基重费米子体系的超导机制提供了关键信息。",
        "badges": [],
        "links":  {
            "pdf": "https://iopscience.iop.org/article/10.1088/1674-1056/26/7/077401",
            "arxiv": "https://arxiv.org/pdf/1706.05794",
            "code": null
        }
    },
    {
        "id": 128,
        "title": "Visualizing a Bosonic Symmetry Protected Topological Phase in an Interacting Fermion Model",
        "authors": "Han-Qing Wu, Yuan-Yao He, Yi-Zhuang You, Tsuneya Yoshida, Norio Kawakami, Cenke Xu, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2016",
        "journal": "Physical Review B",
        "volume": "94(16), 165121 (2016)",
        "category": "prb",
        "abstract": "我们系统研究了相互作用下双层Kane-Mele-Hubbard模型的边缘物理，通过大规模量子蒙特卡洛模拟发现其费米子边缘态被相互作用打开能隙，而玻色边缘态保持无能隙，首次在格点模型中直接观测到涌现的玻色对称保护拓扑相。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.94.165121",
            "arxiv": "https://arxiv.org/pdf/1606.05822",
            "code": null
        }
    },
    {
        "id": 129,
        "title": "Quantum critical point of Dirac fermion mass generation without spontaneous symmetry breaking",
        "authors": "Yuan-Yao He, Han-Qing Wu, Yi-Zhuang You, Cenke Xu, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2016",
        "journal":  "Physical Review B",
        "volume":  "94(24), 241111 (2016)",
        "category": "prb",
        "abstract": "我们系统研究了(2+1)维SU(4)对称狄拉克费米子晶格模型的量子相变，发现相互作用可诱发不依赖于质量算符凝聚的能隙生成机制，为理解超越传统序参量的拓扑物态相变提供了新范例。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.94.241111",
            "arxiv": "https://arxiv.org/pdf/1603.08376",
            "code": null
        }
    },
    {
        "id": 130,
        "title": "Charge compensation in extremely large magnetoresistance materials LaSb and LaBi revealed by the first-principles calculations",
        "authors": "Peng-Jie Guo, Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu",
        "year": "2016",
        "journal": "Physical Review B",
        "volume": "93(23), 235142 (2016)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了LaSb与LaBi的电子结构，揭示了其电子-空穴完美补偿与高迁移率特征是产生超大磁阻的关键机制，为理解半金属中磁输运的普适规律提供了理论依据。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.235142",
            "arxiv":  "https://arxiv.org/pdf/1602.05061",
            "code": null
        }
    },
    {
        "id": 131,
        "title": "Diagnosis of interaction-driven topological phase via exact diagonalization",
        "authors": "Han-Qing Wu, Yuan-Yao He, Chen Fang, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2016",
        "journal": "Physical Review Letters",
        "volume": "117(6), 066403 (2016)",
        "category": "prl",
        "abstract": "我们系统提出了基于精确对角化的相互作用拓扑相诊断方法，通过点群算符分析与关联函数计算，揭示了弱排斥作用下可自发产生量子反常霍尔相，并观察到其与强作用向列莫特绝缘体的一阶相变。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.117.066403",
            "arxiv": "https://arxiv.org/pdf/1602.02034",
            "code": null
        }
    },
    {
        "id": 132,
        "title": "Strong charge density wave fluctuation and sliding state in PdTeI with quasi-1D PdTe chains",
        "authors": "Hechang Lei, Kai Liu, Jun-ichi Yamaura, Sachiko Maki, Youichi Murakami, Zhong-Yi Lu, Hideo Hosono",
        "year": "2016",
        "journal":  "Physical Review B",
        "volume": "93(12), 121101(R) (2016)",
        "category": "prb",
        "abstract": "我们系统研究了准一维材料PdTeI单晶中的电荷密度波行为，发现其在长程有序温度之上存在强涨落区域与赝隙态，并在低温下出现滑动电荷密度波态及磁场诱导的异常磁阻转变。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.121101",
            "arxiv": "https://arxiv.org/pdf/1512.07375",
            "code": null
        }
    },
    {
        "id": 133,
        "title": "Topological invariants for interacting topological insulators: II. Breakdown of the Green's function formalism",
        "authors": "Yuan-Yao He, Han-Qing Wu, Zi Yang Meng, Zhong-Yi Lu",
        "year":  "2016",
        "journal": "Physical Review B",
        "volume": "93(19), 195164 (2016)",
        "category": "prb",
        "abstract": "我们系统研究了相互作用拓扑绝缘体中格林函数形式构建拓扑不变量的适用性，通过大规模量子蒙特卡洛模拟揭示了其在无非相互作用对应的拓扑相变中会出现失效，并据此将相互作用拓扑相变分为可表征与伴随涌现临界模式两类。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.195164",
            "arxiv":  "https://arxiv.org/pdf/1512.02080",
            "code": null
        }
    },
    {
        "id": 134,
        "title": "Topological invariants for interacting topological insulators: I. Efficient numerical evaluation scheme and implementations",
        "authors": "Yuan-Yao He, Han-Qing Wu, Zi Yang Meng, Zhong-Yi Lu",
        "year":  "2016",
        "journal": "Physical Review B",
        "volume": "93(19), 195163 (2016)",
        "category": "prb",
        "abstract": "我们系统提出了相互作用拓扑绝缘体中基于单粒子格林函数的拓扑不变量高效计算方案，通过引入周期化过程克服有限尺寸效应并利用对称性优化，在二维模型验证中实现了自旋陈数的精准量化。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.195163",
            "arxiv":  "https://arxiv.org/pdf/1510.07816",
            "code": null
        }
    },
    {
        "id": 135,
        "title": "Nematic antiferromagnetic states in bulk FeSe",
        "authors": "Kai Liu, Zhong-Yi Lu, Tao Xiang",
        "year": "2016",
        "journal": "Physical Review B",
        "volume": "93(20), 205154 (2016)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算系统研究了块体FeSe的磁性基态，发现其交错二聚体与三聚体反铁磁态的准简并性导致形成准一维磁涨落，为解释该材料缺乏长程磁有序及自旋驱动的向列性提供了理论依据。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.205154",
            "arxiv": "https://arxiv.org/pdf/1510.07447",
            "code": null
        }
    },
    {
        "id": 136,
        "title": "Bona fide interaction-driven topological phase transition in correlated SPT states",
        "authors": "Yuan-Yao He, Han-Qing Wu, Yi-Zhuang You, Cenke Xu, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2016",
        "journal":  "Physical Review B",
        "volume": "93(11), 115150 (2016)",
        "category": "prb",
        "abstract": "我们通过解析与精确对角化方法系统研究了格子Hubbard模型中的相互作用诱导相变，首次理论预测了存在电子弱局域化时标准量子蒙特卡模拟无法探测的脆弱莫特绝缘体相。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.115150",
            "arxiv": "https://arxiv.org/pdf/1508.06389",
            "code": null
        }
    },
    {
        "id": 137,
        "title": "Accelerating optimization by tracing valley",
        "authors": "Qing-Xiao Li, Rong-Qiang He, Zhong-Yi Lu",
        "year": "2016",
        "journal": "Computer Physics Communications",
        "volume":  "203(1), 168 (2016)",
        "category": "cpc",
        "abstract": "我们系统研究了针对狭窄山谷优化问题的加速算法，通过局部抛物线拟合与大步长搜索结合，在动力学平均场理论非线性拟合及经典优化问题中实现了多倍的收敛加速。",
        "badges":  [],
        "links": {
            "pdf": "https://www.sciencedirect.com/science/article/abs/pii/S0010465516300601",
            "arxiv": null,
            "code": null
        }
    },
    {
        "id": 138,
        "title": "Correlated Dirac semimetal by periodized cluster dynamical mean-field theory",
        "authors":  "Qing-Xiao Li, Rong-Qiang He, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Physical Review B",
        "volume":  "92(15), 155127 (2015)",
        "category": "prb",
        "abstract": "我们采用周期化团簇动力学平均场理论研究了蜂窝晶格哈伯德模型，发现弱相互作用下存在关联狄拉克半金属态，强相互作用下通过一阶相变转变为反铁磁绝缘体。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.92.155127",
            "arxiv": "https://arxiv.org/pdf/1507.02495",
            "code": null
        }
    },
    {
        "id": 139,
        "title": "First-principles study of FeSe epitaxial films on SrTiO<sub>3</sub>",
        "authors": "Kai Liu, Miao Gao, Zhong-Yi Lu, Tao Xiang",
        "year": "2015",
        "journal": "Chinese Physics B",
        "volume":  "24(11), 117402 (2015)",
        "category": "cpb",
        "abstract": "我们系统综述了基于第一性原理计算的FeSe/SrTiO<sub>3</sub>薄膜电子与磁结构研究，重点阐明了电荷、自旋及晶格振动的耦合机制，并对比了单层与双层体系的差异。",
        "badges": [],
        "links": {
            "pdf": "https://iopscience.iop.org/article/10.1088/1674-1056/24/11/117402",
            "arxiv": "https://arxiv.org/pdf/1510.08630",
            "code": null
        }
    },
    {
        "id": 140,
        "title": "Antiperovskite Chalco-Halides Ba<sub>3</sub>(FeS<sub>4</sub>)Cl, Ba<sub>3</sub>(FeS<sub>4</sub>)Br and Ba<sub>3</sub>(FeSe<sub>4</sub>)Br with Spin Super-Super Exchange",
        "authors": "Kai Liu, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Scientific Reports",
        "volume": "5(1), 15910 (2015)",
        "category": "sr",
        "abstract": "我们发现了三种新型反钙钛矿硫卤化物，兼具良好的太阳能吸收特性与超长程（>6&Aring;）反铁磁序，并通过中子衍射与第一性原理计算揭示了其独特的超超交换机制。",
        "badges":  [],
        "links": {
            "pdf": "https://www.nature.com/articles/srep15910",
            "arxiv":"https://arxiv.org/pdf/1604.02044",
            "code": null
        }
    },
    {
        "id": 141,
        "title": "Quantum Monte Carlo study of strange correlator in interacting topological insulators",
        "authors": "Han-Qing Wu, Yuan-Yao He, Yi-Zhuang You, Cenke Xu, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2015",
        "journal":  "Physical Review B",
        "volume": "92(16), 165123 (2015)",
        "category": "prb",
        "abstract": "我们系统研究了奇异关联子对相互作用拓扑相的诊断能力，通过大规模量子蒙特卡洛模拟揭示了其在探测量子自旋霍尔-莫特绝缘体相变中的有效性，为研究相互作用拓扑系统提供了高效可靠的数值方法。",
        "badges": [],
        "links":  {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.92.165123",
            "arxiv": "https://arxiv.org/pdf/1506.00549",
            "code": null
        }
    },
    {
        "id": 142,
        "title": "First-principles study of magnetic frustration in FeSe epitaxial films on SrTiO<sub>3</sub>",
        "authors": "Kai Liu, Bing-Jing Zhang, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Physical Review B",
        "volume":  "91(4), 045107 (2015)",
        "category": "prb",
        "abstract": "我们通过第一性原理计算研究了SrTiO<sub>3</sub>衬底上FeSe薄膜的磁性，发现电子掺杂与声子振动共同诱导磁挫败，且底层更易受影响，该结果与已有实验相吻合。",
        "badges": [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.045107",
            "arxiv": "https://arxiv.org/pdf/1501.03923",
            "code": null
        }
    },
    {
        "id": 143,
        "title": "Natural Orbitals Renormalization Group Approach to the Two-Impurity Kondo Critical Point",
        "authors": "Rong-Qiang He, Jianhui Dai, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Physical Review B",
        "volume":  "91(15), 155140 (2015)",
        "category": "prb",
        "abstract": "我们采用自然轨道重整化群方法系统研究了双杂质近藤模型，确认了其反铁磁侧存在量子临界点，解决了数值重整化群与量子蒙特卡洛方法间的长期争议，揭示了其与局域费米液体理论的关联。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.155140",
            "arxiv":  "https://arxiv.org/pdf/1501.01834",
            "code": null
        }
    },
    {
        "id": 144,
        "title": "Theoretical prediction of fragile Mott insulators on plaquette Hubbard lattices",
        "authors": "Han-Qing Wu, Rong-Qiang He, Zi Yang Meng, Zhong-Yi Lu",
        "year": "2015",
        "journal": "Physical Review B",
        "volume": "91(12), 125128 (2015)",
        "category": "prb",
        "abstract": "我们通过动力学平均场理论系统研究了两种格点Hubbard模型的相图，首次发现了一种具有非平庸点群表示的脆弱莫特绝缘体，并揭示了其金属-绝缘体相变由相互作用诱导的能带分裂所表征。",
        "badges":  [],
        "links": {
            "pdf": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.125128",
            "arxiv":  "https://arxiv.org/pdf/1412.7360",
            "code": null
        }
    }
        // 在这里添加更多论文...
    ];

    // ==============================
    // 2. 常量和配置
    // ==============================
    const journalMap = {
        'prl': { name: 'Physical Review Letters', icon: 'fas fa-star', color: '#e74c3c' },
        'prb': { name: 'Physical Review B', icon: 'fas fa-book', color: '#3498db' },
        'prx': { name: 'Physical Review X', icon: 'fas fa-atom', color: '#2ecc71' },
        'nat-phys': { name: 'Nature Physics', icon: 'fas fa-globe', color: '#9b59b6' },
        'npj': { name: 'npj Computational Materials', icon: 'fas fa-cube', color: '#1abc9c' },
        'nl': { name: 'Nano Letters', icon: 'fas fa-microscope', color: '#f39c12' },
        'sci-bull': { name: 'Science Bulletin', icon: 'fas fa-flag', color: '#e67e22' },
        'jpcc': { name: 'Journal of Physical Chemistry C', icon: 'fas fa-flask', color: '#8e44ad' },
        'mat-fut': { name: 'Materials Futures', icon: 'fas fa-layer-group', color: '#d35400' },
        'scpma': { name: 'Science China Physics, Mechanics & Astronomy', icon: 'fas fa-rocket', color: '#27ae60' },
        'prr': { name: 'Physical Review Research', icon: 'fas fa-flask', color: '#d35400' },
        'prm': { name: 'Physical Review Materials', icon: 'fas fa-layer-group', color: '#8e44ad' },
        'nanoscale': { name: 'Nanoscale', icon: 'fas fa-microchip', color: '#16a085' },
        'carbon': { name: 'Carbon', icon: 'fas fa-circle', color: '#2c3e50' },
        'nature': { name: 'Nature', icon: 'fas fa-globe', color: '#9b59b6' },
        'sr': { name: 'Scientific Reports', icon: 'fas fa-file-alt', color: '#fd9644' },
        'scibull': { name: 'Science Bulletin', icon: 'fas fa-bullhorn', color: '#20bf6b' },
        'cpb': { name: 'Chinese Physics B', icon: 'fas fa-pen-nib', color: '#8854d0' },
        'cpl': { name: 'Chinese Physics Letters', icon: 'fas fa-mail-bulk', color: '#26de81' },
        'cpc': { name: 'Computer Physics Communications', icon: 'fas fa-network-wired', color: '#2d98da' },
        'other': { name: '其他期刊', icon: 'fas fa-file-alt', color: '#f39c12' }
    };

    // ==============================
    // 3. DOM元素
    // ==============================
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const journalFilter = document.getElementById('journalFilter');
    const filterTags = document.querySelectorAll('.filter-tag');
    const publicationsGrid = document.getElementById('publicationsGrid');
    const noResults = document.getElementById('noResults');
    const journalsGrid = document.getElementById('journalsGrid');
    const resultCount = document.getElementById('resultCount');
    
    // 翻页元素
    const pagination = document.getElementById('pagination');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    
    // 统计元素
    const totalPapersEl = document.getElementById('totalPapers');
    const prlPapersEl = document.getElementById('prlPapers');
    const recentYearEl = document.getElementById('recentYear');
    const totalJournalsEl = document.getElementById('totalJournals');

    // ==============================
    // 4. 状态管理
    // ==============================
    let currentFilters = {
        search: '',
        year: 'all',
        journal: 'all',
        tag: 'all'
    };

    // 分页状态
    const itemsPerPage = 5;
    let currentPage = 1;
    let filteredPublications = [];
    let totalPages = 1;

    // ==============================
    // 5. 初始化函数
    // ==============================
    function init() {
        updateStatistics();
        populateFilters();
        renderJournalsGrid();
        renderPublications();
        setupEventListeners();
    }

    // ==============================
    // 6. 事件监听器设置
    // ==============================
    function setupEventListeners() {
        // 搜索框输入
        if (searchInput) {
            searchInput.addEventListener('input', debounce(function() {
                currentFilters.search = this.value.toLowerCase();
                currentPage = 1;
                renderPublications();
            }, 300));
        }

        // 年份筛选
        if (yearFilter) {
            yearFilter.addEventListener('change', function() {
                currentFilters.year = this.value;
                currentPage = 1;
                renderPublications();
            });
        }

        // 期刊筛选
        if (journalFilter) {
            journalFilter.addEventListener('change', function() {
                currentFilters.journal = this.value;
                currentPage = 1;
                renderPublications();
            });
        }
        // 已移除快速过滤标签相关事件绑定

        // 翻页按钮
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentPage > 1) {
                    currentPage--;
                    renderPublications();
                    scrollToTop();
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderPublications();
                    scrollToTop();
                }
            });
        }
    }

    // ==============================
    // 防抖函数
    // ==============================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ==============================
    // 滚动到顶部
    // ==============================
    function scrollToTop() {
        const publicationsSection = document.querySelector('.publications-section');
        if (publicationsSection) {
            publicationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // ==============================
    // 8. 更新统计信息
    // ==============================
    function updateStatistics() {
        // 总论文数
        totalPapersEl.textContent = publications.length;
        
        // PRL/PRX论文数
        const prlPrxCount = publications.filter(p => p.category === 'prl' || p.category === 'prx').length;
        prlPapersEl.textContent = prlPrxCount;
        
        // 最新年份
        const years = publications.map(p => parseInt(p.year));
        const latestYear = Math.max(...years);
        recentYearEl.textContent = latestYear;
        
        // 期刊种类
        const uniqueJournals = new Set(publications.map(p => p.journal));
        totalJournalsEl.textContent = uniqueJournals.size;
    }

    // ==============================
    // 9. 填充筛选器
    // ==============================
    function populateFilters() {
        // 获取所有年份
        const years = [...new Set(publications.map(p => p.year))].sort((a, b) => b - a);
        
        // 填充年份筛选器
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = `${year}年`;
            yearFilter.appendChild(option);
        });
        
        // 获取所有期刊
        const journals = [...new Set(publications.map(p => p.journal))].sort();
        
        // 填充期刊筛选器
        journals.forEach(journal => {
            const option = document.createElement('option');
            option.value = journal;
            option.textContent = journal;
            journalFilter.appendChild(option);
        });
    }

    // ==============================
    // 10. 渲染期刊统计
    // ==============================
    function renderJournalsGrid() {
        // 计算各期刊数量
        const journalCounts = {};
        Object.keys(journalMap).forEach(journal => {
            journalCounts[journal] = 0;
        });
        
        publications.forEach(pub => {
            if (journalCounts[pub.category] !== undefined) {
                journalCounts[pub.category]++;
            }
        });
        
        // 生成HTML
        journalsGrid.innerHTML = Object.keys(journalMap)
            .filter(journal => journalCounts[journal] > 0)
            .map(journal => {
                const journalInfo = journalMap[journal];
                return `
                    <div class="journal-card">
                        <div class="journal-icon">
                            <i class="${journalInfo.icon}"></i>
                        </div>
                        <div class="journal-name">${journalInfo.name}</div>
                        <div class="journal-count">${journalCounts[journal]}</div>
                        <div class="journal-label">篇发表</div>
                    </div>
                `;
            }).join('');
    }

    // ==============================
    // 11. 渲染论文列表
    // ==============================
    function renderPublications() {
        // 过滤论文
        let filtered = filterPublications(publications);
        
        // 排序论文（按年份降序）
        filtered = filtered.sort((a, b) => b.year - a.year);
        
        // 保存过滤结果用于分页
        filteredPublications = filtered;
        
        // 更新结果数量
        resultCount.textContent = `${filteredPublications.length}篇论文`;
        
        // 计算总页数
        totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
        
        // 确保当前页码有效
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages;
        } else if (currentPage < 1 && filteredPublications.length > 0) {
            currentPage = 1;
        }
        
        // 获取当前页的论文
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentPagePublications = filteredPublications.slice(startIndex, endIndex);
        
        // 显示/隐藏无结果提示
        if (currentPagePublications.length === 0) {
            publicationsGrid.style.display = 'none';
            noResults.style.display = 'block';
        } else {
            publicationsGrid.style.display = 'flex';
            noResults.style.display = 'none';
            // 渲染论文卡片
            publicationsGrid.innerHTML = currentPagePublications.map(pub => renderPublicationCard(pub)).join('');
        }
        
        // 更新分页UI
        updatePagination();
    }

    // ==============================
    // 12. 更新分页UI
    // ==============================
    function updatePagination() {
        // 更新页码显示
        currentPageEl.textContent = currentPage;
        totalPagesEl.textContent = totalPages;
        
        // 更新按钮禁用状态
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1 || totalPages === 0;
        }
        if (nextBtn) {
            nextBtn.disabled = currentPage === totalPages || totalPages === 0;
        }
        
        // 控制翻页控件显示
        if (pagination) {
            pagination.style.display = (totalPages > 1) ? 'flex' : 'none';
        }
    }

    // ==============================
    // 13. 过滤论文
    // ==============================
    function filterPublications(pubs) {
        return pubs.filter(pub => {
            // 搜索过滤
            if (currentFilters.search) {
                const searchTerm = currentFilters.search;
                const searchableText = [
                    pub.title,
                    pub.authors,
                    pub.journal,
                    pub.keywords.join(' '),
                    pub.abstract
                ].join(' ').toLowerCase();
                
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }
            
            // 年份过滤
            if (currentFilters.year !== 'all' && pub.year !== currentFilters.year) {
                return false;
            }
            
            // 期刊过滤
            if (currentFilters.journal !== 'all' && pub.journal !== currentFilters.journal) {
                return false;
            }
            
            // 标签过滤
            if (currentFilters.tag !== 'all') {
                if (currentFilters.tag === 'prl' && pub.category !== 'prl') {
                    return false;
                }
                if (currentFilters.tag === 'prb' && pub.category !== 'prb') {
                    return false;
                }
                if (currentFilters.tag === 'highlight' && !pub.badges.includes('highlight')) {
                    return false;
                }
                if (currentFilters.tag === 'open-access' && !pub.badges.includes('open-access')) {
                    return false;
                }
            }
            
            return true;
        });
    }

    // ==============================
    // 14. 渲染单个论文卡片
    // ==============================
    function renderPublicationCard(pub) {
        const journalInfo = journalMap[pub.category] || journalMap['other'];
        
        // 生成链接按钮
        const linkElements = [
            pub.links.pdf ? `
                <a href="${pub.links.pdf}" class="card-link link-pdf" target="_blank" rel="noopener" title="PDF全文">
                    <i class="fas fa-file-pdf"></i>
                </a>
            ` : '',
            pub.links.arxiv ? `
                <a href="${pub.links.arxiv}" class="card-link link-arxiv" target="_blank" rel="noopener" title="arXiv预印本">
                    <i class="fas fa-archive"></i>
                </a>
            ` : '',
            pub.links.code ? `
                <a href="${pub.links.code}" class="card-link link-code" target="_blank" rel="noopener" title="代码/数据">
                    <i class="fas fa-code"></i>
                </a>
            ` : ''
        ].filter(link => link).join('');
        
        return `
            <div class="publication-card ${pub.category}">
                <div class="card-header">
                    <div class="card-header-left">
                        <div class="card-year">${pub.year}</div>
                        <h3 class="card-title">${pub.title}</h3>
                    </div>
                    <span class="card-badge badge-journal">
                        <i class="${journalInfo.icon}"></i> ${pub.journal}
                    </span>
                </div>
                <div class="card-content">
                    <p class="card-authors">${pub.authors}</p>
                    <p class="card-venue"><span class="venue-highlight">${pub.journal}</span><span class="volume-highlight">${pub.volume ? ', ' + pub.volume : ''}</span></p>
                    <p class="card-abstract">${pub.abstract}</p>
                </div>
                <div class="card-footer">
                    ${linkElements ? `<div class="card-links">${linkElements}</div>` : ''}
                </div>
            </div>
        `;
    }

    // ==============================
    // 14. 启动应用
    // ==============================
    init();
});