// 学术发表管理脚本 - 整洁排版版
document.addEventListener('DOMContentLoaded', function() {
    // ==============================
    // 1. 论文数据定义
    // ==============================
    const publications = [
        {
            id: 1,
            title: "Low-energy interband Kondo bound states in orbital-selective Mott phases",
            authors: "Jia-Ming Wang, Yin Chen, Yi-Heng Tian, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2025",
            journal: "Physical Review B",
            volume: "111(15), 155107 (2025)",
            category: "prb",
            abstract: "本研究基于两轨道哈伯德模型，重新审视OSMP中低能激发的物理机制。计算结果表明，传统的holon-doublon束缚态描述并不完整，真正的低能激发由宽带中的类Kondo态与窄带中的双占据态共同构成，即“带间Kondo样束缚态”。随着两带宽度趋于接近，还会在宽带中出现异常的新型束缚态。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.111.155107",
                arxiv: null,
                code: null
            }
        },
        {
            id: 2,
            title: "High-temperature superconductivity in Li<sub>2</sub>AuH<sub>6</sub> mediated by strong electron-phonon coupling under ambient pressure",
            authors: "Zhenfeng Ouyang, Bo-Wen Yao, Xiao-Qi Han, Peng-Jie Guo, Ze-Feng Gao, and Zhong-Yi Lu",
            year: "2025",
            journal: "Physical Review B",
            volume: "111(14), L140501 (2025)",
            category: "prb",
            abstract: "本研究利用自主开发的InvDesFlow搜索引擎发现了在常压下稳定的立方结构Li<sub>2</sub>AuH<sub>6</sub>，并给出了可行的实验合成路径。第一性原理分析表明该材料在常压下具有约140 K的高超导转变温度，其关键机制来自H-1s电子与Au–H八面体及Li振动模式的强电子-声子耦合。研究强调应关注具有强EPC的多声子模式，并提出通过向氢化物中引入其他原子以产生更多强EPC模式，是寻找高温超导体的有效策略。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.111.L140501",
                arxiv: null,
                code: null
            }
        },
        {
            id: 3,
            title: "AI-accelerated discovery of altermagnetic materials",
            authors: "Ze-Feng Gao, Shuai Qu, Bocheng Zeng, Yang Liu, Ji-Rong Wen, Hao Sun, Peng-Jie Guo, and Zhong-Yi Lu",
            year: "2025",
            journal: "National Science Review",
            volume: "12(4), nwaf066 (2025)",
            category: "nsr",
            abstract: "本工作提出一种由人工智能搜索引擎驱动的自动化发现流程，通过预训练图神经网络学习晶体结构特征并在少量正样本上微调分类器，从而高效预测材料的altermagnetism属性。研究成功发现了50种新的交变磁材料，覆盖金属、半导体与绝缘体，其中包括首次报道的四种i-wave altermagnets。新材料展现出丰富的新奇物性，如反常霍尔效应、反常克尔效应及拓扑特性，体现了AI在加速功能材料发现方面的巨大潜力。",
            links: {
                pdf: "https://academic.oup.com/nsr/article-pdf/12/4/nwaf066/62054665/nwaf066.pdf",
                arxiv: null,
                code: null
            }
        },
        {
            id: 4,
            title: "Ab initio dynamical mean field theory with natural orbitals renormalization group impurity solver",
            authors: "Jia-Ming Wang, Jing-Xuan Wang, Rong-Qiang He, Li Huang, and Zhong-Yi Lu",
            year: "2025",
            journal: "npj Computational Materials",
            volume: "11(1), 86 (2025)",
            category: "npj",
            abstract: "本研究提出了名为 Zen 的从头算多体计算工具包，将DFT与单点DMFT无缝结合，并配备零温的自然轨道重整化组求解器与有限温的杂化展开CT-QMC求解器。通过对SrVO₃、La₃Ni₂O₇和MnO三个典型强关联材料的测试，结果与已有实验和理论高度一致。研究表明Zen工具包能够准确刻画d电子强关联体系的电子结构。",
            links: {
                pdf: "https://doi.org/10.1038/s41524-025-01586-6",
                arxiv: null,
                code: null
            }
        },
        {
            id: 5,
            title: "First-principles study on the electronic and magnetic properties of monolayer FeSe on Cu<sub>3</sub>N(001)",
            authors: "Hui-Hui He, Xiao-Le Qiu, Ben-Chao Gong, Zhong-Yi Lu, and Kai Liu",
            year: "2023",
            journal: "Physical Review B",
            volume: "108(11), 115147 (2023)",
            category: "prb",
            abstract: "本研究基于第一性原理计算，提出Cu<sub>3</sub>N(001)是调控单层FeSe电子结构与磁性的有前景的空穴掺杂衬底。界面应变与电荷重新分布可能导致二聚与条纹反铁磁态之间的强磁性竞争。Cu<sub>3</sub>N可以向FeSe单层掺入约0.02空穴/Fe，并可通过外电场或Cu空位进一步调节，表明FeSe/Cu<sub>3</sub>N是探索FeSe体系空穴掺杂超导的重要平台。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.108.115147",
                arxiv: null,
                code: null
            }
        },
        {
            id: 6,
            title: "Crystal valley Hall effect",
            authors: "Chao-Yang Tan, Ze-Feng Gao, Huan-Cheng Yang, Zheng-Xin Liu, Kai Liu, Peng-Jie Guo, and Zhong-Yi Lu",
            year: "2025",
            journal: "Physical Review B",
            volume: "111(9), 094411 (2025)",
            category: "prb",
            abstract: "本研究通过对称性分析与第一性原理计算，提出了无需时间反演对称性即可实现的新型“晶体谷霍尔效应”，并在二维交变磁材料Fe<sub>2</sub>WSe<sub>4</sub>与Fe<sub>2</sub>WS<sub>4</sub>中得到验证。研究还表明，它们在单轴应变下可实现压磁效应，在双轴压缩应力下可从交变磁半导体转变为双极化拓扑Weyl半金属。该工作拓展了谷霍尔效应的研究方向，也为探索交变磁半导体与拓扑相变提供了新平台。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.111.094411",
                arxiv: null,
                code: null
            }
        },
        {
            id: 7,
            title: "Hund electronic correlation in La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> under high pressure",
            authors: "Zhenfeng Ouyang, Jia-Ming Wang, Jing-Xuan Wang, Rong-Qiang He, Li Huang, and Zhong-Yi Lu",
            year: "2024",
            journal: "Physical Review B",
            volume: "109(11), 115114 (2024)",
            category: "prb",
            abstract: "本工作基于DFT+DMFT研究高压下La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub>的强关联电子结构，发现其为多轨道Hund金属。Ni的3<em>d</em><sub>z²</sub>与3<em>d</em><sub>x²−y²</sub>轨道接近半充填并贡献费米能级附近能带，呈现明显的能带重整化与轨道选择性关联。体系在高温处于自旋冻结态，低温恢复为费米液体，揭示了该材料中的Hund关联本质。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.109.115114",
                arxiv: null,
                code: null
            }
        },
        {
            id: 8,
            title: "AI-Driven Inverse Design of Materials: Past, Present, and Future",
            authors: "Xiao-Qi Han, Xin-De Wang, Meng-Yuan Xu, Zhen Feng, Bo-Wen Yao, Peng-Jie Guo, Ze-Feng Gao, and Zhong-Yi Lu",
            year: "2025",
            journal: "Chinese Physics Letters",
            volume: "42(2), 027403 (2025)",
            category: "cpl",
            abstract: "本综述系统梳理了人工智能驱动的材料逆向设计的发展历程、主要进展与技术路线。文章阐述了材料性质与结构间复杂耦合带来的挑战，总结生成式与判别式模型在材料设计中的突破，并指出未来仍需解决的关键问题。作为领域的最新综述，该工作为研究者提供了全面而有价值的参考。",
            links: {
                pdf: "http://cpl.iphy.ac.cn/en/article/doi/10.1088/0256-307X/42/2/027403",
                arxiv: null,
                code: null
            }
        },
        {
            id: 9,
            title: "Non-Fermi liquid and antiferromagnetic correlations with hole doping in the bilayer two-orbital Hubbard model of La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> at zero temperature",
            authors: "Yin Chen, Yi-Heng Tian, Jia-Ming Wang, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2024",
            journal: "Phys. Rev. B",
            volume: "110(23), 235119 (2024)",
            category: "prb",
            abstract: "该研究基于来源于 La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> 的双层双轨道 Hubbard 模型，揭示掺空穴后体系依次呈现 Mott 绝缘态、赝能隙态、非费米液体态及费米液体态。结果表明基态处于具有 Hund 自旋关联的非费米液体区，并展示层间反铁磁关联如何随轨道占据变化而迅速减弱。工作指出在低压下的空穴掺杂可能模拟高压效应，从而削弱短程 SDW 并有利于超导的形成。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.110.235119",
                arxiv: null,
                code: null
            }
        },
        {
            id: 10,
            title: "Tunable surface electron gas and effect of phonons in Sr<sub>2</sub>CuO<sub>3</sub>: A first-principles study",
            authors: "Xin Du, Hui-Hui He, Xiao-Xiao Man, Zhong-Yi Lu, and Kai Liu",
            year: "2024",
            journal: "Phys. Rev. B",
            volume: "110(19), 195121 (2024)",
            category: "prb",
            abstract: "该工作系统研究了 Sr<sub>2</sub>CuO<sub>3</sub> 体相与薄膜的电子、磁性和声子性质，发现表面暴露的 Cu–O 链可形成依赖于链间自旋耦合的自旋极化电子气。研究还表明链内与链外氧原子的声子模式会在表面诱导明显的电荷与自旋涨落，揭示出强烈的多自由度耦合机制，这可能对一维铜氧化物超导体的超导性具有重要意义。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.110.195121",
                arxiv: null,
                code: null
            }
        },
        {
            id: 11,
            title: "A hybrid method integrating Green's function Monte Carlo and projected entangled pair states",
            authors: "He-Yu Lin, Rong-Qiang He, Yibin Guo, and Zhong-Yi Lu",
            year: "2024",
            journal: "Chinese Physics B",
            volume: "33(11), 117504 (2024)",
            category: "cpb",
            abstract: "本文提出了一种将 Green's function Monte Carlo（GFMC）与 PEPS 张量网络方法相结合的混合策略，其中 PEPS 同时作为试探态与引导波函数。该方法在处理受挫量子自旋体系时兼具高精度与高效率，并在平方晶格的受挫 J<sub>1</sub>–J<sub>2</sub> 海森堡模型基态能量计算中展现出与其他数值方法相当甚至更优的精度。文章系统总结并拓展了作者在 Phys. Rev. B 109, 235133 (2024) 的相关工作。",
            links: {
                pdf: "https://cpb.iphy.ac.cn/EN/abstract/article_127221.shtml",
                arxiv: null,
                code: null
            }
        },
        {
            id: 12,
            title: "Absence of electron-phonon coupling superconductivity in the bilayer phase of La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> under pressure",
            authors: "Zhenfeng Ouyang, Miao Gao, and Zhong-Yi Lu",
            year: "2024",
            journal: "npj Quantum Materials",
            volume: "9(1), 80 (2024)",
            category: "npj Quantum Materials",
            abstract: "本文基于第一性原理研究了高压下 La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> 双层相的声子性质及其电子-声子耦合，结果表明 EPC 强度不足以解释实验上约 80 K 的超导转变温度。此外，计算揭示的费米面嵌套可能与实验观测到的电荷密度波转变相关，进一步支持该体系属于非常规超导。",
            links: {
                pdf: "https://doi.org/10.1038/s41535-024-00689-5",
                arxiv: null,
                code: null
            }
        },
        {
            id: 13,
            title: "Exploring charge and spin fluctuations in infinite-layer cuprate SrCuO<sub>2</sub> from a phonon perspective",
            authors: "Xin Du, Pei-Han Sun, Ben-Chao Gong, Jian-Feng Zhang, Zhong-Yi Lu, and Kai Liu",
            year: "2024",
            journal: "Science China Physics, Mechanics & Astronomy",
            volume: "67(8), 287411 (2024)",
            category: "scpma",
            abstract: "本文基于第一性原理从声子角度研究了无限层铜氧化物 SrCuO<sub>2</sub> 的电子与磁性质，发现其声子振动可在掺空穴后诱发电荷、电偶极及局域磁矩的强烈涨落。其中，A<sub>1g</sub> 模式会导致 Cu–O 间显著电荷重分布，并呈现与超导 Tc 类似的“穹顶”演化。进一步分析表明在最优掺杂附近出现 A<sub>1g</sub> 模式频率软化及近费米能级的范霍夫奇点，提示可能存在电子–声子耦合。",
            links: {
                pdf: "https://doi.org/10.1007/s11433-024-2388-y",
                arxiv: null,
                code: null
            }
        },
        {
            id: 14,
            title: "Green's function Monte Carlo combined with projected entangled pair state approach to the frustrated J<sub>1</sub>&minus;J<sub>2</sub> Heisenberg model",
            authors: "He-Yu Lin, Yibin Guo, Rong-Qiang He, Z. Y. Xie, and Zhong-Yi Lu",
            year: "2024",
            journal: "Phys. Rev. B",
            volume: "109(23), 235133 (2024)",
            category: "prb",
            abstract: "本文提出将 Green's function Monte Carlo 方法与 PEPS 张量网络结合，以降低张量网络在计算物理观测量时的高昂代价。该混合方法在解决受挫 J<sub>1</sub>&minus;J<sub>2</sub> Heisenberg 模型中显著提高了基态能量计算精度，并揭示了中间参数区间可能存在柱状价键态。该方法有效兼具精确性与计算效率，适用于研究受挫量子自旋体系。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.109.235133",
                arxiv: null,
                code: null
            }
        },
        {
            id: 15,
            title: "Variational optimization of the amplitude of neural-network quantum many-body ground states",
            authors: "Jia-Qi Wang, Han-Qing Wu, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2024",
            journal: "Phys. Rev. B",
            volume: "109(24), 245120 (2024)",
            category: "prb",
            abstract: "本文将量子多体波函数分解为幅度网络与符号结构，并重点优化由残差卷积网络构成的幅度部分。方法在典型量子体系中取得优于或可比传统 VMC 与 DMRG 的基态能量，对受挫 J<sub>1</sub>&minus;J<sub>2</sub> 模型甚至优于文献中的复值 CNN，显示复值 NQS 的符号结构难以优化。结果体现了幅度优化策略的有效性。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.109.245120",
                arxiv: null,
                code: null
            }
        },
        {
            id: 16,
            title: "Spin-charge-lattice couplings and Co doping effect in Ba(Fe<sub>1−x</sub>Co<sub>x</sub>)<sub>2</sub>As<sub>2</sub>: an ab initio molecular dynamics study",
            authors: "Hui-Hui He, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2024",
            journal: "Superconductor Science and Technology",
            volume: "37(6), 065020 (2024)",
            category: "Superconductor Science and Technology",
            abstract: "本文利用从头算分子动力学研究 Ba(Fe<sub>1−x</sub>Co<sub>x</sub>)<sub>2</sub>As<sub>2</sub> 中自旋、电荷与晶格的耦合关系，发现三者以约 5.5 THz 的特征频率紧密关联。Co 掺杂增强了体系中自旋动态的空间不均匀性，并呈现与超导 T<sub>c</sub> 类似的非单调变化；而电荷动态变化较弱。该研究为理解铁基超导体中 T<sub>c</sub> 的穹顶行为提供了新的动力学视角。",
            links: {
                pdf: "https://doi.org/10.1088/1361-6668/ad4a13",
                arxiv: null,
                code: null
            }
        },
        {
            id: 17,
            title: "Correlation effects and concomitant two-orbital s&plusmn;-wave superconductivity in La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> under high pressure",
            authors: "Yi-Heng Tian, Yin Chen, Jia-Ming Wang, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2024",
            journal: "Physical Review B",
            volume: "109(16), 165154 (2024)",
            category: "prb",
            abstract: "研究基于从 La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> 下折的双层两轨道 Hubbard 模型，揭示两轨道均形成 s± 波超导且因轨道间跃迁而同步出现。体系在半填充时会同时转变为 Mott 绝缘态，而 Hund 耦合显著增强电子关联并对超导性起关键作用。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.109.165154",
                arxiv: null,
                code: null
            }
        },
        {
            id: 18,
            title: "Non-Fermi liquid and Hund correlation in La<sub>4</sub>Ni<sub>3</sub>O<sub>10</sub> under high pressure",
            authors: "Jing-Xuan Wang, Zhenfeng Ouyang, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2024",
            journal: "Physical Review B",
            volume: "109(16), 165140 (2024)",
            category: "prb",
            abstract: "研究利用 DFT+DMFT 分析 La<sub>4</sub>Ni<sub>3</sub>O<sub>10</sub> 的电子关联，并与 La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> 比较。结果显示其外层 Ni 的 e<sub>g</sub> 轨道呈现类非费米液体行为，体现 Hund 关联及随温度线性的散射率；而内层 Ni 呈现费米液体特征。由于额外空穴掺杂削弱关联性，这可能解释其较低的超导转变温度。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.109.165140",
                arxiv: null,
                code: null
            }
        },
        {
            id: 19,
            title: "Hund electronic correlation in La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> under high pressure",
            authors: "Zhenfeng Ouyang, Jia-Ming Wang, Jing-Xuan Wang, Rong-Qiang He, Li Huang, and Zhong-Yi Lu",
            year: "2024",
            journal: "Physical Review B",
            volume: "109(11), 115114 (2024)",
            category: "prb",
            abstract: "通过 DFT+DMFT 研究发现，La<sub>3</sub>Ni<sub>2</sub>O<sub>7</sub> 在高压下表现为多轨道 Hund 金属，其 Ni 的 3d<sub>z²</sub> 和 3d<sub>x²−y²</sub> 轨道接近半填充并共同跨越费米面。体系呈现轨道选择性关联、能带重整化，并在高温下进入自旋冻结相、低温为费米液体，揭示其显著的 Hund 关联特征。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.109.115114",
                arxiv: null,
                code: null
            }
        },
        {
            id: 20,
            title: "Realization of multiple topological states and topological phase transitions in (4,0) carbon nanotube derivatives",
            authors: "Yan Gao, Yu Du, Yun-Yun Bai, Weikang Wu, Qiang Wang, Yong Liu, Kai Liu, and Zhong-Yi Lu",
            year: "2024",
            journal: "Carbon",
            volume: "223, 118971 (2024)",
            category: "carbon",
            abstract: "该工作基于紧束缚模型与第一性原理计算，提出(4,0)碳纳米管衍生物可作为研究拓扑态与拓扑相变的理想平台。其在1D、2D 与 3D 体系中分别实现了多种典型拓扑半金属态，并通过能带与表面态计算确认其拓扑非平庸性质。研究为拓扑碳材料体系提供了新的重要成员。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/pii/S0008622324001908",
                arxiv: null,
                code: null
            }
        },
        {
            id: 21,
            title: "First-principles study of the magnetic and electronic properties of K-coated FeSe films",
            authors: "Xiao-Xiao Man, Jian-Feng Zhang, Pei-Han Sun, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2024",
            journal: "Physical Review B",
            volume: "109(3), 035105 (2024)",
            category: "prb",
            abstract: "本工作基于第一性原理计算研究了不同钾覆盖度下 K/FeSe 薄膜的磁与电子结构。结果表明体系存在两个能量接近的反铁磁态，暗示强磁涨落；同时电荷与自旋密度的变化随钾覆盖度呈现与超导 Tc 相同的“穹顶”趋势。研究为理解 K/FeSe 的超导机制及其他 FeSe 系超导体提供了重要线索。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.109.035105",
                arxiv: null,
                code: null
            }
        },
        {
            id: 22,
            title: "Thickness-dependent oscillation of the superconducting T<sub>c</sub> in ultrathin NbC films: A first-principles study",
            authors: "Chang-Jiang Wu, Jian-Feng Zhang, Pei-Han Sun, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2023",
            journal: "Physical Review B",
            volume: "108(11), 115161 (2023)",
            category: "prb",
            abstract: "本研究基于第一性原理系统揭示了超薄 NbC 薄膜的超导临界温度随厚度呈现显著振荡，振幅可达约 10 K。其中三层 NbC 的 T<sub>c</sub> 甚至超过块体 NbC。进一步分析表明，高 T<sub>c</sub> 的薄膜均具有明显的声子软化与增强的声子–电子耦合。该结果为理解降维对金属碳化物超导性的调控提供了重要物理图像。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.108.115161",
                arxiv: null,
                code: null
            }
        },
        {
            id: 23,
            title: "First-principles study on the electronic and magnetic properties of monolayer FeSe on Cu<sub>3</sub>N(001)",
            authors: "Hui-Hui He, Xiao-Le Qiu, Ben-Chao Gong, Zhong-Yi Lu, and Kai Liu",
            year: "2023",
            journal: "Physical Review B",
            volume: "108(11), 115147 (2023)",
            category: "prb",
            abstract: "本研究基于第一性原理提出 Cu<sub>3</sub>N(001) 是调控 FeSe 单层电子与磁性的重要空穴掺杂衬底。界面处的应变与电荷重排导致二聚体与条纹反铁磁态之间可能出现强磁挫折。计算显示 Cu<sub>3</sub>N 可向 FeSe 单层提供约 0.02 个空穴/Fe，且掺杂量可通过外电场或 Cu 空位调节。这一体系是研究空穴掺杂 FeSe 超导的重要平台。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.108.115147",
                arxiv: null,
                code: null
            }
        },
        {
            id: 24,
            title: "Nonlinear Hall effect and potential Ising superconductivity in monolayer MXene heterostructure of T&minus;Mo<sub>2</sub>C/H&minus;Mo<sub>2</sub>C",
            authors: "Ning-Ning Zhao, Zhen-Feng Ouyang, Pei-Han Sun, Jian-Feng Zhang, Kai Liu, and Zhong-Yi Lu",
            year: "2023",
            journal: "Physical Review B",
            volume: "108(3), 035140 (2023)",
            category: "prb",
            abstract: "基于第一性原理计算，研究发现单层 MXene 异质结构 T–Mo<sub>2</sub>C/H–Mo<sub>2</sub>C 中可同时出现大的贝里曲率偶极诱导的非线性霍尔效应与潜在的 Ising 超导性。这些效应源自费米能级附近的能带反交叉与倒转，以及面内反演对称性的破缺所引起的 Ising 型自旋轨道耦合。此外，其中一种异质结构还呈现出 Z<sub>2</sub> 拓扑金属性。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.108.035140",
                arxiv: null,
                code: null
            }
        },
        {
            id: 25,
            title: "Stacking-dependent topological quantum states in bilayer Mn<sub>2</sub>Cl<sub>3</sub>Br<sub>3</sub>",
            authors: "Xinlei Zhao, Peng-Jie Guo, Fengjie Ma, and Zhong-Yi Lu",
            year: "2023",
            journal: "Physical Review Research",
            volume: "5(3), 033040 (2023)",
            category: "prb", 
            abstract: "基于第一性原理研究表明，双层 Mn<sub>2</sub>Cl<sub>3</sub>Br<sub>3</sub> 在不同堆叠方式下均呈现铁磁层间耦合，并可在同一体系中实现多种奇异拓扑量子态，包括拓扑节点环自旋无隙半金属、自旋谷极化量子谷霍尔效应（SVP-QVH）以及高陈数量子反常霍尔态。其中 SVP-QVH 为首次发现的新拓扑相，具有两条自旋相同、分属不同极化谷且沿边界反向传播的拓扑保护无隙态。研究为发现新拓扑相及设计二维多功能电子、自旋电子与拓扑器件提供了思路。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevResearch.5.033040",
                arxiv: null,
                code: null
            }
        },
        {
            id: 26,
            title: "Cubic C<sub>20</sub>: An intrinsic superconducting carbon allotrope",
            authors: "Ying Yu, Xun-Wang Yan, Fengjie Ma, Miao Gao, and Zhong-Yi Lu",
            year: "2023",
            journal: "Applied Physics Express",
            volume: "16(6), 063003 (2023)",
            category: "ape",
            abstract: "基于第一性原理计算，研究者系统分析了立方相金属碳同素体 sc-C<sub>20</sub> 的声子介导超导性。通过 Wannier 插值精确计算电子-声子耦合，并求解 Eliashberg 方程，预测其为无需掺杂或引入客体原子的本征碳超导体，转变温度约为 24 K。本研究丰富了碳基超导材料家族。",
            links: {
                pdf: "https://doi.org/10.35848/1882-0786/acdc02",
                arxiv: null,
                code: null
            }
        },
        {
            id: 27,
            title: "Large intrinsic anomalous Hall effect in both Nb<sub>2</sub>FeB<sub>2</sub> and Ta<sub>2</sub>FeB<sub>2</sub> with collinear antiferromagnetism",
            authors: "Xiao-Yao Hou, Huan-Cheng Yang, Zheng-Xin Liu, Peng-Jie Guo, and Zhong-Yi Lu",
            year: "2023",
            journal: "Physical Review B",
            volume: "107(16), L161109 (2023)",
            category: "prb",
            abstract: "该工作基于对称性分析和第一性原理计算，预测两种已知的共线反铁磁金属 Nb<sub>2</sub>FeB<sub>2</sub> 与 Ta<sub>2</sub>FeB<sub>2</sub> 具有极大的本征反常霍尔效应，其 Néel 温度均高于室温。研究还补全了实现共线反铁磁体系中反常霍尔效应所需的对称性条件。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.107.L161109",
                arxiv: null,
                code: null
            }
        },
        {
            id: 28,
            title: "Pressure-induced superconductivity at 32 K in MoB<sub>2</sub>",
            authors: "Cuiying Pei, Jianfeng Zhang, Qi Wang, Yi Zhao, Lingling Gao, Chunsheng Gong, Shangjie Tian, Ruitao Luo, Mingtao Li, Wenge Yang, Zhong-Yi Lu, Hechang Lei, Kai Liu, and Yanpeng Qi",
            year: "2023",
            journal: "National Science Review",
            volume: "10(5), nwad034 (2023)",
            category: "nsr",
            abstract: "该研究在高压下发现 MoB<sub>2</sub> 的超导转变温度可达 32 K，为过渡金属硼化物中目前最高的 Tc。理论分析表明其超导性由 Mo 的 d 电子与面外声子模的强耦合驱动。该工作为寻找高 Tc 过渡金属硼化物提供了新思路。",
            links: {
                pdf: "https://academic.oup.com/nsr/article-pdf/10/5/nwad034/50489440/nwad034.pdf",
                arxiv: null,
                code: null
            }
        },
        {
            id: 29,
            title: "Stabilizing a hydrogen-rich superconductor at 1 GPa by charge transfer modulated virtual high-pressure effect",
            authors: "Miao Gao, Peng-Jie Guo, Huan-Cheng Yang, Xun-Wang Yan, Fengjie Ma, Zhong-Yi Lu, Tao Xiang, and Hai-Qing Lin",
            year: "2023",
            journal: "Physical Review B",
            volume: "107(18), L180501 (2023)",
            category: "prb",
            abstract: "该研究基于第一性原理提出，通过调整金属向氢的电荷转移，可在 1 GPa 下稳定原本需 280 GPa 才存在的 CaBH<sub>5</sub> 高压相。以 Cs 取代 Ca 后产生的“电荷转移调控的虚拟高压效应”显著增强结构稳定性，使氢富阴离子结构在低压下重新出现。进一步发现 CsBH<sub>5</sub> 是强耦合超导体，Tc 可达 98 K，为探索低压高温超导提供了新机制。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.107.L180501",
                arxiv: null,
                code: null
            }
        },
        {
            id: 30,
            title: "Prediction of LiCrTe<sub>2</sub> monolayer as a half-metallic ferromagnet with a high Curie temperature",
            authors: "Li-Man Xiao, Huan-Cheng Yang, and Zhong-Yi Lu",
            year: "2023",
            journal: "Chinese Physics B",
            volume: "32(5), 057505 (2023)",
            category: "cpb",
            abstract: "基于第一性原理计算，研究者预测出具有畸变方形结构的 LiCrTe<sub>2</sub> 单层是一种二维半金属铁磁体，具有高稳定性、宽自旋带隙、大磁矩以及极高的居里温度。在 −5% 至 +5% 的双轴应变下，其铁磁性与半金属性依然保持良好。拉伸与压缩应变均能显著提高磁晶各向异性能，并且在超过 1% 压缩应变时，易磁化方向会从面内转变为面外。该材料在自旋电子学中具有潜在重要应用。",
            links: {
                pdf: "https://doi.org/10.1088/1674-1056/acbe2e",
                arxiv: null,
                code: null
            }
        },
        {
            id: 31,
            title: "Li<sub>2</sub>NiSe<sub>2</sub>: A new-type intrinsic two-dimensional ferromagnetic semiconductor above 200 K",
            authors: "Li-Man Xiao, Huan-Cheng Yang, and Zhong-Yi Lu",
            year: "2023",
            journal: "Chinese Physics B",
            volume: "32(3), 037501 (2023)",
            category: "cpb",
            abstract: "基于第一性原理计算，本文提出二维铁磁半导体 Li<sub>2</sub>NiSe<sub>2</sub>，其居里温度超过 200 K，且结构动力学稳定。该材料可视为 Li 修饰的 1T 型 NiSe<sub>2</sub>，其铁磁性主要来自符合 GKA 规则的 Ni–Se–Ni 超交换作用。系统研究表明，Li<sub>2</sub>NiSe<sub>2</sub> 在自旋电子学领域具有潜在应用价值，并为设计二维铁磁半导体提供了新的材料体系。",
            links: {
                pdf: "https://doi.org/10.1088/1674-1056/aca39f",
                arxiv: null,
                code: null
            }
        },
        {
            id: 32,
            title: "Detection of long-range orbital-Hall torques",
            authors: "Arnab Bose, Fabian Kammerbauer, Rahul Gupta, Dongwook Go, Yuriy Mokrousov, Gerhard Jakob, and Mathias Kläui",
            year: "2023",
            journal: "Phys. Rev. B",
            volume: "107(13), 134423 (2023)",
            category: "prb",
            abstract: "本文实验证实 Nb 和 Ru 可产生显著的轨道霍尔扭矩，其效应取决于所接触的铁磁材料。在 Nb（或 Ru）/Ni 双层中观测到明显增强的阻尼型扭矩，甚至出现符号反转。随着 Ni 厚度增加，扭矩强度异常增强，这一现象不同于常规自旋转移扭矩，揭示了轨道霍尔扭矩可能具有长程作用特性。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.107.134423",
                arxiv: null,
                code: null
            }
        },
        {
            id: 33,
            title: "Quantum anomalous hall effect in collinear antiferromagnetism",
            authors: "Peng-Jie Guo, Zheng-Xin Liu, Zhong-Yi Lu",
            year: "2023",
            journal: "npj Computational Materials",
            volume: "9(1), 70 (2023)",
            category: "npj",
            abstract: "该工作提出了一个包含反铁磁序的四能带模型，证明了共线反铁磁材料中也能出现量子反常霍尔效应。研究发现，单层CrO在应变作用下可从AFM Weyl半金属转变为AFM QAH绝缘体，为寻找高温QAH材料提供了新机制。",
            links: {
                pdf: "https://doi.org/10.1038/s41524-023-01025-4",
                arxiv: null,
                code: null
            }
        },
        {
            id: 34,
            title: "Spin-Resolved Imaging of Antiferromagnetic Order in Fe<sub>4</sub>Se<sub>5</sub> Ultrathin Films on SrTiO<sub>3</sub>",
            authors: "Wenhao Zhang, Zhi-Mo Zhang, Jin-Hua Nie, Ben-Chao Gong, Min Cai, Kai Liu, Zhong-Yi Lu, Ying-Shuang Fu",
            year: "2023",
            journal: "Advanced Materials",
            volume: "35(19), 2209931 (2023)",
            category: "Advanced Materials",
            abstract: "本研究利用自旋极化扫描隧道显微镜直接观测了Fe<sub>4</sub>Se<sub>5</sub>超薄膜中的反铁磁条纹结构，并揭示其来源于具有平面磁矩的成对棋盘式反铁磁基态。实验结合第一性原理计算进一步展现了三类纳米尺度反铁磁畴及其受热扰动的行为，为理解FeSe类材料的磁性与超导相图提供了重要线索。",
            links: {
                pdf: "https://advanced.onlinelibrary.wiley.com/doi/pdf/10.1002/adma.202209931",
                arxiv: null,
                code: null
            }
        },
        {
            id: 35,
            title: "Magnetic Proximity Effect in LaO/EuO Heterostructures: A First-Principles Study",
            authors: "Pei-Han Sun, Xiao-Xiao Man, Ben-Chao Gong, Zhong-Yi Lu, Kai Liu",
            year: "2023",
            journal: "Physical Review B",
            volume: "107(12), 125130 (2023)",
            category: "prb",
            abstract: "该研究基于第一性原理计算揭示了LaO/EuO异质结构中显著的磁近邻效应，包括La层表面能带的自旋分裂与局域磁矩的出现。结果表明界面及EuO表面累积的电子气均呈现自旋极化，并发现自旋极化可在整个LaO层中扩散，同时可通过外电场有效调控。该工作为理解LaO/EuO体系中的磁近邻效应、研究拓扑马约拉纳态及设计电场控制的超导开关提供了重要理论基础。",
            links: {
                pdf: "https://link.aps.org/doi/10.1103/PhysRevB.107.125130",
                arxiv: null,
                code: null
            }
        },
        {
            id: 36,
            title: "Tuning the Mottness in Sr<sub>3</sub>Ir<sub>2</sub>O<sub>7</sub> via Bridging Oxygen Vacancies",
            authors: "Miao Xu, Changwei Zou, Benchao Gong, Ke Jia, Shusen Ye, Zhenqi Hao, Kai Liu, Youguo Shi, Zhong-Yi Lu, Peng Cai, Yayu Wang",
            year: "2023",
            journal: "Chinese Physics Letters",
            volume: "40(3), 037101 (2023)",
            category: "cpl",
            abstract: "该研究利用扫描隧道显微镜解析Sr<sub>3</sub>Ir<sub>2</sub>O<sub>7</sub>中氧空位对莫特绝缘态的影响。结果发现无缺陷区域呈现均匀的莫特能隙，而在氧空位附近能隙显著增大，这源于局域跳跃积分的减弱。研究表明桥接氧缺陷能显著调控局域能带宽度，为操纵莫特性强度提供了新途径。",
            links: {
                pdf: "https://doi.org/10.1088/0256-307X/40/3/037101",
                arxiv: null,
                code: null
            }
        },
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
            id: 73,
            title: "Order parameter for the multichannel Kondo model at quantum criticality",
            authors: "Ru Zheng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(4), 045111 (2021)",
            category: "prb",
            abstract: "本文研究了量子临界点处多通道近藤模型的序参量。通过发展适当的理论框架，我们识别了表征量子相变的序参量性质，为理解强关联系统中的临界行为提供了新的见解。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.045111",
                arxiv: "https://arxiv.org/pdf/2201.04303",
                code: null
            }
        },
        {
            id: 74,
            title: "Topological properties of non-centrosymmetric superconductors TIr<sub>2</sub>B<sub>2</sub> (T=Nb, Ta)",
            authors: "Yan Gao, Jian-Feng Zhang, Shengyuan A. Yang, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(12), 125154 (2021)",
            category: "prb",
            abstract: "我们结合第一性原理计算和对称性分析，揭示了非中心对称超导体TIr<sub>2</sub>B<sub>2</sub> (T=Nb, Ta)在正常态为拓扑Weyl金属，具有丰富的拓扑特征（Weyl点、节线、沙漏型Weyl环和表面费米弧）。结合其本征超导性，该体系为探索三维拓扑超导提供了理论依据和潜在平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.125154",
                arxiv: "https://arxiv.org/pdf/2012.15204",
                code: null
            }
        },
        {
            id: 75,
            title: "Deconfined Quantum Phase Transition of a Higher-Order Symmetry-Protected Topological State",
            authors: "Chen Peng, Long Zhang, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "104(7), 075112 (2021)",
            category: "prb",
            abstract: "我们的研究揭示，在方格晶格反铁磁体中，高阶对称保护拓扑态可以通过一个直接跨越去限制量子临界点的拓扑相变进入平庸无序相。这一发现确立了去限制量子临界点作为连接传统序参量相变与拓扑相变的多临界点角色，展现了二者之间深刻的对偶性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.075112",
                arxiv: "https://arxiv.org/pdf/2010.11129",
                code: null
            }
        },
        {
            id: 76,
            title: "Large anomalous Hall effect induced by gapped nodal lines in GdZn and GdCd",
            authors: "Ning-Ning Zhao, Kai Liu, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(20), 205104 (2021)",
            category: "prb",
            abstract: "基于第一性原理计算，我们发现铁磁体GdZn和GdCd在费米面附近存在拓扑节线。当磁化破坏镜面对称性时，这些节线会打开带隙并产生巨大的贝里曲率，从而在其带隙内诱导出巨大的反常霍尔效应。该工作表明，此体系是研究拓扑与磁性相互作用的理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.205104",
                arxiv: "https://arxiv.org/pdf/2106.12404",
                code: null
            }
        },
        {
            id: 77,
            title: "LaO as a candidate substrate for realizing superconductivity in FeSe epitaxial film",
            authors: "Xiao-Le Qiu, Ben-Chao Gong, Huan-Cheng Yang, Zhong-Yi Lu, and Kai Liu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(3), 035143 (2021)",
            category: "prb",
            abstract: "基于第一性原理计算，我们发现LaO(001)衬底可有效诱导外延FeSe单层膜产生强磁涨落与显著电子掺杂，且二者可能产生超导邻近效应，是研究界面超导的理想候选体系。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.035143",
                arxiv: "https://arxiv.org/pdf/2106.12388",
                code: null
            }
        },
        {
            id: 78,
            title: "Coexistence of topological Weyl and nodal-ring states in ferromagnetic and ferrimagnetic double perovskites",
            authors: "Xinlei Zhao, Peng-jie Guo, Fengjie Ma, and Zhong-Yi Lu",
            year: "2021",
            journal: "Physical Review B",
            volume: "103(8), 085138 (2021)",
            category: "prb",
            abstract: "我们通过理论计算预测了铁磁和亚铁磁双钙钛矿中拓扑外尔态和节点环态的共存。这项研究揭示了这些材料中丰富的拓扑相，为设计具有多功能拓扑性质的新型磁性材料指明了方向。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.085138",
                arxiv: "https://arxiv.org/pdf/2007.15699",
                code: null
            }
        },
        {
            id: 79,
            title: "Two ultra-stable novel allotropes of Tellurium few-layers",
            authors: "Cong Wang, Linlu Wu, Xieyu Zhou, Linwei Zhou, Pengjie Guo, Kai Liu, Zhong-Yi Lu, Zhihai Cheng, Yang Chai, and Wei Ji",
            year: "2020",
            journal: "Chinese Physics B",
            volume: "29(9), 097103 (2020)",
            category: "cpb",
            abstract: "理论研究发现碲少层存在两种新相（&epsilon;和&zeta;）。其中，&zeta;相比已知最稳定的单层&gamma;相能量低29 meV/Te以上，而&epsilon;相与&gamma;相稳定性相当。随着层数增加，&zeta;相与&alpha;相的能量差减小，在四层（12子层）厚度时消失，且该转变厚度在电荷掺杂下增加。&epsilon;相和&zeta;相分别为金属性链状和层状结构，&zeta;相具有强层间耦合和量子阱态。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/1674-1056/aba606/meta",
                arxiv: "https://arxiv.org/pdf/1809.00561",
                code: null
            }
        },
        {
            id: 80,
            title: "Natural orbitals renormalization group approach to a Kondo singlet",
            authors: "Ru Zheng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2020",
            journal: "Science China Physics, Mechanics & Astronomy",
            volume: "63(9), 297411 (2020)",
            category: "scpma",
            abstract: "我们利用新发展的自然轨道重整化群（NORG）方法研究了近藤单态。研究发现，在自然轨道框架下，近藤屏蔽机制变得清晰简单，存在一个主导屏蔽磁性杂质的活性自然轨道。通过引入近藤关联能，我们得到特征长度尺度（仅几纳米），解释了实验中难以探测近藤屏蔽云的原因。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/s11433-019-1520-3",
                arxiv: "https://arxiv.org/pdf/1803.03072",
                code: null
            }
        },
        {
            id: 81,
            title: "First-principles study of the robust superconducting state of NbTi alloys under ultrahigh pressures",
            authors: "Jian-Feng Zhang, Miao Gao, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(19), 195140 (2020)",
            category: "prb",
            abstract: "我们通过第一性原理计算研究了NbTi合金在超高压下稳健超导的起源。研究发现，高压促使合金结构有序化，其超导性仍符合BCS机制。稳健的超导转变温度源于声子行为、电子耦合与库仑作用随压力的协同变化。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.195140",
                arxiv: "https://arxiv.org/pdf/2106.12371",
                code: null
            }
        },
        {
            id: 82,
            title: "SrPd, a candidate material with extremely large magnetoresistance",
            authors: "Xiao-Qin Lu, Peng-Jie Guo, Jian-Feng Zhang, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(16), 165115 (2020)",
            category: "prb",
            abstract: "我们基于第一性原理计算提出SrPd是一种具有极大磁电阻的候选材料。计算表明其具有良好的电子-空穴补偿和高载流子迁移率，可用两带模型描述输运性质，预测其在4 T磁场下低温磁电阻可达10<sup>5</sup>%。该材料为研究XMR效应电荷补偿机制提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.165115",
                arxiv: "https://arxiv.org/pdf/2106.12410",
                code: null
            }
        },
        {
            id: 83,
            title: "First-principles study on the electron-phonon coupling and magnetoresistance of LaBi under pressure",
            authors: "Jian-Feng Zhang, Peng-Jie Guo, Miao Gao, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(15), 155139 (2020)",
            category: "prb",
            abstract: "我们通过第一性原理计算研究了LaBi在压力下的电子-声子耦合与磁电阻。发现其在约7 GPa发生结构相变但仍保持拓扑非平庸性。计算表明弱电子-声子耦合不足以解释其超导性，且磁电阻未见抑制，这可能源于样品杂质或其他未知机制。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.155139",
                arxiv: "https://arxiv.org/pdf/2106.12365",
                code: null
            }
        },
        {
            id: 84,
            title: " RRuB<sub>2</sub> (R=Y, Lu), topological superconductor candidates with hourglass-type Dirac ring",
            authors: "Yan Gao, Peng-Jie Guo, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(11), 115137 (2020)",
            category: "prb",
            abstract: "我们预测RRuB<sub>2</sub>（R=Y, Lu）是拓扑超导体候选材料，具有沙漏型狄拉克环和能带反转诱导的拓扑表面态。其本征超导性（T<sub>c</sub>~10 K）可通过邻近效应在表面态诱导超导，为研究拓扑超导提供理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.115137",
                arxiv: "https://arxiv.org/pdf/2106.12220",
                code: null
            }
        },
        {
            id: 85,
            title: "Topological properties of Mo<sub>2</sub>C and W<sub>2</sub>C superconductors",
            authors: "Ning-Ning Zhao, Peng-Jie Guo, Xiao-Qin Lu, Qiang Han, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(19), 195144 (2020)",
            category: "prb",
            abstract: "基于第一性原理计算，我们研究了Mo<sub>2</sub>C和W<sub>2</sub>C的拓扑性质。二者均为三维强拓扑绝缘体，其(001)表面态穿过或接近费米能级，具有螺旋自旋结构，可通过邻近效应诱导p+ip超导，为探索拓扑超导与马约拉纳零模提供平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.195144",
                arxiv: "https://arxiv.org/pdf/2106.11792",
                code: null
            }
        },
        {
            id: 86,
            title: "A Model Compression Method with Matrix Product Operators for Speech Enhancement",
            authors: "Xingwei Sun, Ze-Feng Gao, Zhong-Yi Lu, Junfeng Li, and Yonghong Yan",
            year: "2020",
            journal: "IEEE-ACM Transactions on Audio, Speech, and Language Processing",
            volume: "28, 2837-2847 (2020)",
            category: "IEEE-ACM Transactions on Audio, Speech, and Language Processing",
            abstract: "本文提出一种基于矩阵乘积算子（MPO）的深度神经网络压缩方法，用于语音增强任务。该方法在训练前将网络中的权重矩阵替换为MPO分解格式，大幅减少了参数量。在MLP与LSTM模型上的实验表明，该压缩方法在各种压缩率下均优于常用的剪枝方法，且尤其适用于无云端计算的应用场景。",
            links: {
                pdf: "https://ieeexplore.ieee.org/abstract/document/9222236",
                arxiv: "https://arxiv.org/pdf/2010.04950",
                code: null
            }
        },
        {
            id: 87,
            title: "Strong-coupling superconductivity in LiB<sub>2</sub>C<sub>2</sub> trilayer films",
            authors: "Miao Gao, Xun-Wang Yan, Zhong-Yi Lu, and Tao Xiang",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(9), 094501 (2020)",
            category: "prb",
            abstract: "基于第一性原理计算，我们预测三层LiB<sub>2</sub>C<sub>2</sub>薄膜是一种通过&sigma;电子金属化实现的高温超导体。求解各向异性Eliashberg方程表明，其常压下T<sub>c</sub>超过液氮温度，且双轴拉伸应变下可进一步提升至125 K",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.094501",
                arxiv: null,
                code: null
            }
        },
        {
            id: 88,
            title: "Quantum spin Hall effect in monolayer and bilayer TaIrTe<sub>4</sub>",
            authors: "Peng-Jie Guo, Xiao-Qin Lu, Wei Ji, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(4), 041109(R) (2020)",
            category: "prb",
            abstract: "我们通过第一性原理计算发现，单层和双层TaIrTe<sub>4</sub>均为量子自旋霍尔绝缘体。分析表明，层间相互作用与&Gamma;点小带隙诱导了双层中的能带反转，且层间距调控可实现拓扑相变。该体系为不同维度拓扑相研究提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.041109",
                arxiv: "https://arxiv.org/pdf/1910.14307",
                code: null
            }
        },
        {
            id: 89,
            title: " AFeSe<sub>2</sub> (A=Tl, K, Rb, or Cs): Iron-based superconducting analog of the cuprates",
            authors: "Xinlei Zhao, Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2020",
            journal: "Physical Review B",
            volume: "101(18), 184504 (2020)",
            category: "prb",
            abstract: "基于第一性原理计算，我们发现AFeSe<sub>2</sub>（A=Tl, K, Rb, Cs）在晶体结构、反铁磁绝缘性和强交换作用等方面与铜氧化物母体高度相似，预测其通过掺杂可能成为铁基高温超导体。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.101.184504",
                arxiv: "https://arxiv.org/pdf/1910.03545",
                code: null
            }
        },
        {
            id: 90,
            title: "Combined spontaneous symmetry-breaking and symmetry-protected topological order from cluster charge interaction",
            authors: "Chen Peng, Rong-Qiang He, Yuan-Yao He, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review Research",
            volume: "2(3), 033291 (2020)",
            category: "prr",
            abstract: "通过大规模量子蒙特卡洛模拟，我们发现Kane-Mele模型中团簇电荷相互作用可导致对称性保护拓扑序与Kekul&eacute;价键序共存，并驱动一种独特的拓扑相变，其特征为单粒子格林函数零点与自旋通道能隙闭合，且无平均场对应。",
            links: {
                pdf: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.033291",
                arxiv: "https://arxiv.org/pdf/1909.03025",
                code: null
            }
        },
        {
            id: 91,
            title: "RSAVS superconductors: Materials with a superconducting state that is robust against large volume shrinkage",
            authors: "Cheng Huang, Jing Guo, Jianfeng Zhang, Karoline Stolze, Shu Cai, Kai Liu, Hongming Weng, Zhongyi Lu, Qi Wu, Tao Xiang, Robert J. Cava, and Liling Sun",
            year: "2020",
            journal: "Physical Review Materials",
            volume: "4(7), 071801(R) (2020)",
            category: "prm",
            abstract: "我们发现一类新型超导体（RSAVS超导体），其超导转变温度在极大压力范围内保持稳定。例如，(TaNb)<sub>0.67</sub>(HfZrTi)<sub>0.33</sub>高熵合金与NbTi合金的T<sub>c</sub>分别在超过136 GPa和141 GPa压力下几乎不变。电子结构计算表明，费米面附近d<sub>x<sup>2</sup>-y<sup>2</sup></sub>和d<sub>z<sup>2</sup></sub>轨道电子的稳定贡献是维持T<sub>c</sub>的关键。",
            links: {
                pdf: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.4.071801",
                arxiv: "https://arxiv.org/pdf/1912.10794",
                code: null
            }
        },
        {
            id: 92,
            title: "Degenerate antiferromagnetic states in spinel oxide LiV<sub>2</sub>O<sub>4</sub>",
            authors: "Ben-Chao Gong, Huan-Cheng Yang, Kui Jin, Kai Liu, and Zhong-Yi Lu",
            year: "2020",
            journal: "Chinese Physics B",
            volume: "29(7), 077508 (2020)",
            category: "cpb",
            abstract: "通过自旋极化第一性原理计算，我们系统研究了尖晶石氧化物LiV<sub>2</sub>O<sub>4</sub>的磁性与电子性质。研究发现，一系列由铁磁V<sub>4</sub>四面体通过角共享反铁磁V<sub>4</sub>四面体连接而成的磁态能量简并，导致强磁挫和大磁熵。典型二四面体反铁磁态的能带分析表明，该体系处于金属-绝缘体转变边缘，且V原子的t<sub>2g</sub>与e<sub>g</sub>轨道在磁交换中作用不同，为理解其奇异磁性与重费米子行为提供了见解。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/1674-1056/ab9617/meta",
                arxiv: null,
                code: null
            }
        },
        {
            id: 93,
            title: "Interlayer quantum transport in Dirac semimetal BaGa<sub>2</sub>",
            authors: "Sheng Xu, Changhua Bao, Peng-Jie Guo, Yi-Yan Wang, Qiao-He Yu, Lin-Lin Sun, Yuan Su, Kai Liu, Zhong-Yi Lu, Shuyun Zhou, and Tian-Long Xia",
            year: "2020",
            journal: "Nature Communications",
            volume: "11(1), 2370 (2020)",
            category: "nat-com",
            abstract: "我们报告了狄拉克半金属BaGa<sub>2</sub>中层间输运的研究。由于其准二维狄拉克锥恰好位于费米能级，体系易于达到量子极限。实验观测到由狄拉克费米子在相邻层间零级朗道能级隧穿引起的负层间磁电阻，且电阻在磁场垂直于c轴时出现峰值。该现象可由量子极限下的狄拉克费米子隧穿模型很好地解释。",
            links: {
                pdf: "https://www.nature.com/articles/s41467-020-15854-0",
                arxiv: "https://arxiv.org/pdf/1907.10702",
                code: null
            }
        },
        {
            id: 94,
            title: "Bethe-Slater-curve-like behavior and interlayer spin-exchange coupling mechanisms in two-dimensional magnetic bilayers",
            authors: "Cong Wang, Xieyu Zhou, Linwei Zhou, Yuhao Pan, Zhong-Yi Lu, Xiangang Wan, Xiaoqun Wang, and Wei Ji",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(2), 020402(R) (2020)",
            category: "prb",
            abstract: "通过第一性原理计算，我们在九种MX<sub>2</sub>（M=V, Cr, Mn; X=S, Se, Te）双层材料中发现了类似Bethe-Slater曲线的行为，即层间磁耦合随距离发生反铁磁-铁磁转变。以CrSe<sub>2</sub>为例，该转变由层间区域Se-p<sub>z</sub>波函数重叠处的泡利排斥与自旋极化电子的动能增益之间的竞争所主导。此项研究揭示了二维磁性材料中层间耦合的新机制，为调控层间磁性提供了新途径。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.020402",
                arxiv: "https://arxiv.org/pdf/1906.05576",
                code: null
            }
        },
        {
            id: 95,
            title: "de Haas–van Alphen quantum oscillations and electronic structure in the large-Chern-number topological chiral semimetal CoSi",
            authors: "Huan Wang, Sheng Xu, Xiao-Qin Lu, Xiao-Yan Wang, Xiang-Yu Zeng, Jun-Fa Lin, Kai Liu, Zhong-Yi Lu, and Tian-Long Xia",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(11), 114129 (2020)",
            category: "prb",
            abstract: "我们通过德哈斯-范阿尔芬量子振荡和第一性原理计算研究了大陈数拓扑手性半金属CoSi的电子结构。这项研究揭示了其独特的拓扑性质和费米面特征，为理解和利用拓扑手性材料提供了重要的实验和理论依据。",
            links: {
                pdf: null,
                arxiv: null,
                code: null
            }
        },
        {
            id: 96,
            title: "First-principles study of solid hydrogen: Comparison among four exchange-correlation functionals",
            authors: "Huan-Cheng Yang, Kai Liu, Zhong-Yi Lu, and Hai-Qing Lin",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(17), 174109 (2020)",
            category: "prb",
            abstract: "我们通过第一性原理计算重新研究了高压下固态氢的结构，比较了七种结构和四种交换关联泛函（SCAN、PBE、BLYP、vdW-DF）。研究发现，SCAN泛函在150-450 GPa压力范围内预测C2/c结构最稳定，且计算的振动频率与实验吻合，为固态氢的理论研究提供了更可靠的起点。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.174109",
                arxiv: null,
                code: null
            }
        },
        {
            id: 97,
            title: "Correlation Effects in Quadrupole Insulators: a Quantum Monte Carlo Study",
            authors: "Chen Peng, Rong-Qiang He, and Zhong-Yi Lu",
            year: "2020",
            journal: "Physical Review B",
            volume: "102(4), 045110 (2020)",
            category: "prb",
            abstract: "我们通过大规模投影量子蒙特卡洛模拟研究了具有在位Hubbard相互作用的四极绝缘体（高阶拓扑绝缘体）。首次成功利用格林函数方法刻画了相互作用下四极绝缘体的拓扑性质。研究发现，拓扑四极绝缘体在弱相互作用下稳定，而在强相互作用下通过连续拓扑相变转变为平庸反铁磁绝缘体，其临界指数（&nu;=0.67(4)，&beta;=0.40(2)）表明属于新的普适类。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.045110",
                arxiv: "https://arxiv.org/pdf/1905.13222",
                code: null
            }
        },
        {
            id: 98,
            title: "Compressing deep neural networks by matrix product operators",
            authors: "Ze-Feng Gao, Song Cheng, Rong-Qiang He, Zhi-Yuan Xie, Hui-Hai Zhao, Zhong-Yi Lu, and Tao Xiang",
            year: "2020",
            journal: "Physical Review Research",
            volume: "2(2), 023300 (2020)",
            category: "prr",
            abstract: "本文提出一种利用矩阵乘积算子（MPO）压缩深度神经网络的方法。MPO 是一种源自物理学的张量网络方法，可高效表示神经网络中的线性变换层。在 FC2、LeNet-5、VGG、ResNet 和 DenseNet 等多个典型网络架构上，于 MNIST 和 CIFAR-10 数据集上的实验表明，该方法在显著减少参数量的同时，能保持甚至提升预测准确率，为构建更简洁高效的神经网络框架提供了新途径。",
            links: {
                pdf: "https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.2.023300",
                arxiv: "https://arxiv.org/pdf/1904.06194",
                code: null
            }
        },
        {
            id: 99,
            title: "Quasi-One-Dimensional Free-Electron-Like States Selected by Intermolecular Hydrogen Bonds at the Glycine/Cu(100) Interface*",
            authors: "Linwei Zhou, Chen-Guang Wang, Zhixin Hu, Xianghua Kong, Zhong-Yi Lu, Hong Guo, and Wei Ji",
            year: "2020",
            journal: "Chinese Physics Letters",
            volume: "37(11), 117301 (2020)",
            category: "cpl",
            abstract: "我们通过第一性原理计算研究了甘氨酸分子在Cu(100)表面形成的氢键自组装网络。研究发现，两条大致垂直的分子间氢键链选择性地与铜表面态杂化，产生了各向异性的准一维类自由电子表面态，揭示了氢键链作为电荷导体的潜在可能。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0256-307X/37/11/117301",
                arxiv: null,
                code: null
            }
        },
        {
            id: 100,
            title: "Electron-phonon coupling in a honeycomb borophene grown on Al(111) surface",
            authors: "Miao Gao, Xun-Wang Yan, Jun Wang, Zhong-Yi Lu, and Tao Xiang",
            year: "2019",
            journal: "Physical Review B",
            volume: "100(2), 024503 (2019)",
            category: "prb",
            abstract: "我们通过第一性原理计算研究了Al(111)衬底上蜂窝状硼烯的电子-声子耦合。发现衬底电荷转移使&sigma;键金属化，但声子模式硬化导致耦合较弱。预测单层AlB<sub>2</sub>可能有6.5 K的超导转变，因此Al(111)上的蜂窝状硼烯也可能具有类似超导性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.100.024503",
                arxiv: "https://arxiv.org/pdf/1902.06276",
                code: null
            }
        },
        {
            id: 101,
            title: "Manipulating the electronic and magnetic properties of monolayer electride Ca<sub>2</sub>N by hydrogenation",
            authors: "Xiao-Le Qiu, Jian-Feng Zhang, Zhong-Yi Lu, and Kai Liu",
            year: "2019",
            journal: "Journal of Physical Chemistry C",
            volume: "123(40), 24698–24704 (2019)",
            category: "jpcc",
            abstract: "我们基于第一性原理计算，研究了氢化对单层驻极体Ca<sub>2</sub>N电子与磁性的调控。研究表明，单侧氢化可使其从非磁性金属转变为半导体（带隙1.13 eV），完全氢化则进一步诱发结构相变并使其转变为铁磁半金属，实现了对该材料电子态的逐级操控。",
            links: {
                pdf: "https://pubs.acs.org/doi/abs/10.1021/acs.jpcc.9b06089",
                arxiv: null,
                code: null
            }
        },
        {
            id: 102,
            title: "Quasi-degenerate magnetic states in &alpha;-RuCl<sub>3</sub>",
            authors: "Huan-Cheng Yang, Ben-Chao Gong, Kai Liu, and Zhong-Yi Lu",
            year: "2019",
            journal: "Journal of Physics: Condensed Matter",
            volume: "31(2), 025803 (2019)",
            category: "jpc",
            abstract: "基于DFT+U与自旋轨道耦合计算，我们发现&alpha;-RuCl<sub>3</sub>在U=2.0 eV、J=0.4 eV时锯齿形反铁磁为基态，但存在一系列能量相近的磁构型。调节U和J可使其与基态简并，导致强磁挫与无长程序状态，这为理解压力诱导的量子无序相提供了视角。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/1361-648X/aaeeac/meta",
                arxiv: null,
                code: null
            }
        },
        {
            id: 103,
            title: "Electronic structures of quasi-one-dimensional cuprate superconductors Ba<sub>2</sub>CuO<sub>3+&delta;</sub>",
            authors: "Kai Liu, Zhong-Yi Lu, and Tao Xiang",
            year: "2019",
            journal: "Physical Review Materials",
            volume: "3(4), 044802 (2019)",
            category: "prm",
            abstract: "通过第一性原理计算，我们研究了Ba<sub>2</sub>CuO<sub>3+&delta;</sub>的电子与磁结构。发现Ba<sub>2</sub>CuO<sub>3</sub>为反铁磁莫特绝缘体，具有准一维CuO链和链内反铁磁耦合；而Ba<sub>2</sub>CuO<sub>4</sub>为非磁性金属。氧空位倾向于占据平面位置，与实验一致。电荷掺杂可诱导磁涨落，表明超导配对可能主要由CuO链内的反铁磁涨落驱动。",
            links: {
                pdf: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.3.044802",
                arxiv: "https://arxiv.org/pdf/1901.11392",
                code: null
            }
        },
        {
            id: 104,
            title: "Hexagonal supertetrahedral boron: A topological metal with multiple spin-orbit-free emergent fermions",
            authors: "Yan Gao, Weikang Wu, Peng-Jie Guo, Chengyong Zhong, Shengyuan A. Yang, Kai Liu, and Zhong-Yi Lu",
            year: "2019",
            journal: "Physical Review Materials",
            volume: "3(4), 044202 (2019)",
            category: "prm",
            abstract: "通过第一性原理计算，我们预测了一种新型三维硼同素异形体（H-硼）。该结构具有良好稳定性与优异力学性质，并且是一种具有多种无自旋轨道耦合涌现费米子的拓扑金属，包括半狄拉克费米子、三重简并费米子、节线费米子与节面费米子，为探索新型费米子物理提供了理想平台。",
            links: {
                pdf: "https://journals.aps.org/prmaterials/abstract/10.1103/PhysRevMaterials.3.044202",
                arxiv: "https://arxiv.org/pdf/1901.08413",
                code: null
            }
        },
        {
            id: 105,
            title: "Finite-temperature Auxiliary-Field Quantum Monte Carlo: Self-Consistent Constraint and Systematic Approach to Low Temperatures",
            authors: "Yuan-Yao He, Mingpu Qin, Hao Shi, Zhong-Yi Lu, and Shiwei Zhang",
            year: "2019",
            journal: "Physical Review B",
            volume: "99(4), 045108 (2019)",
            category: "prb",
            abstract: "我们提出了一种有限温度、巨正则系综下的辅助场量子蒙特卡洛（AFQMC）方法，通过自洽约束控制符号问题。该方法在二维排斥哈伯德模型（1/8掺杂）中进行了系统基准测试，达到了低至T=1/80的温度。该方法在高温下精确，在低温下与零温约束路径AFQMC的结果一致，为热力学性质的计算提供了系统准确的解决方案。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.99.045108",
                arxiv: "https://arxiv.org/pdf/1811.07290",
                code: null
            }
        },
        {
            id: 106,
            title: "&beta;-RhPb<sub>2</sub>, a topological superconductor candidate",
            authors: "Jian-Feng Zhang, Peng-Jie Guo, Miao Gao, Kai Liu, and Zhong-Yi Lu",
            year: "2019",
            journal: "Physical Review B",
            volume: "99(4), 045110 (2019)",
            category: "prb",
            abstract: "我们通过第一性原理计算预测&beta;-RhPb<sub>2</sub>是拓扑超导体候选材料。计算表明其在布里渊区Z点存在能带反转，拓扑不变量Z<sub>2</sub>非零，且具有穿过费米能级的拓扑表面态。同时，该材料动力学稳定，电子-声子耦合计算预测超导转变温度可达9.7 K，是值得实验验证的拓扑超导体。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.99.045110",
                arxiv: null,
                code: null
            }
        },
        {
            id: 107,
            title: "A family of high-temperature ferromagnetic monolayers with locked spin-dichroism-mobility anisotropy: MnNX and CrCX (X=Cl, Br, I; C=S, Se, Te)",
            authors: "Cong Wang, Xieyu Zhou, Linwei Zhou, Ninghua Tong, Zhong-Yi Lu, and Wei Ji",
            year: "2019",
            journal: "Science Bulletin",
            volume: "64(5), 293-300 (2019)",
            category: "sci-bull",
            abstract: "我们理论预测了一系列具有高居里温度（T<sub>c</sub>：100-500 K）的二维铁磁半导体单层MnNX与CrCX。这些材料表现出独特的自旋锁定线性二向色性与载流子迁移率各向异性（约10<sup>2</sup>量级），为高性能自旋电子与光电器件提供了新材料平台。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S2095927319301021",
                arxiv: "https://arxiv.org/pdf/1807.11000",
                code: null
            }
        },
        {
            id: 108,
            title: "Stacking tunable interlayer magnetism in bilayer CrI<sub>3</sub>",
            authors: "Peiheng Jiang, Cong Wang, Dachuan Chen, Zhicheng Zhong, Zhe Yuan, Zhong-Yi Lu, and Wei Ji",
            year: "2019",
            journal: "Physical Review B",
            volume: "99(14), 144401 (2019)",
            category: "prb",
            abstract: "通过第一性原理计算，我们揭示了双层CrI<sub>3</sub>中层间磁耦合可通过堆垛方式有效调控。研究发现，导致反铁磁耦合的新堆垛构型（C2/m空间群）取代了此前认为的R3构型。层内与层间磁耦合分别由强、弱极限下主导的不同交换机制决定，为二维磁性材料的层间磁学调控提供了新范式。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.99.144401",
                arxiv: "https://arxiv.org/pdf/1806.09274",
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
        "category": "npj Quantum Materials",
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
        "category": "npj Quantum Materials",
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
        "category": "sci-bull",
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
    },
    {id: 145,
            title: "Prediction of phonon-mediated high-temperature superconductivity in Li<sub>3</sub>B<sub>4</sub>C<sub>2</sub>",
            authors: "Miao Gao, Zhong-Yi Lu, and Tao Xiang",
            year: "2015",
            journal: "Physical Review B",
            volume: "91(4), 045132 (2015)",
            category: "prb",
            abstract: "该研究基于第一性原理，预测了层状材料Li<sub>3</sub>B<sub>4</sub>C<sub>2</sub>具有强电子–声子耦合并可能实现高于MgB<sub>2</sub>的超导转变温度，其超导性源于费米能级附近的两条&sigma;键带与层内键伸缩模的强耦合，且材料在动力学和形成能上均显示出可实验合成的稳定性。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.91.045132",
                arxiv: null,
                code: null
            }
        },
        {
            id: 146,
            title: "First-principles study of electron-phonon coupling and superconductivity in compound Li<sub>2</sub>C<sub>2</sub>",
            authors: "Miao Gao, Xin Kong, Zhong-Yi Lu, and Tao Xiang",
            year: "2015",
            journal: "Acta Physica Sinica",
            volume: "64(21), 214701 (2015)",
            category: "Acta Physica Sinica",
            abstract: "该研究基于第一性原理揭示含一维锯齿碳链的高压相Cmcm-Li<sub>2</sub>C<sub>2</sub>具有由&pi;<sup>*</sup>带主导的金属性并呈现中等强度的电子-声子耦合，预测其在常压与 5 GPa 下分别可实现约 13.2 K 与 9.8 K 的声子介导超导性，若获实验验证其将成为首个一维碳链超导体且在锂碳化物体系中具有最高超导转变温度。",
            links: {
                pdf: "https://wulixb.iphy.ac.cn/en/article/doi/10.7498/aps.64.214701",
                arxiv: null,
                code: null
            }
        },
        {
            id: 147,
            title: "Neutron Scattering Measurements of Spatially Anisotropic Magnetic Exchange Interactions in Semiconducting K<sub>0.85</sub>Fe<sub>1.54</sub>Se<sub>2</sub> (T<sub>N</sub>=280 K)",
            authors: "Jun Zhao, Yao Shen, R. J. Birgeneau, Miao Gao, Zhong-Yi Lu, D. -H. Lee, X. Z. Lu, H. J. Xiang, D. L. Abernathy, and Y. Zhao",
            year: "2014",
            journal: "Physical Review Letters",
            volume: "112(17), 177002 (2014)",
            category: "prl",
            abstract: "本工作通过中子散射研究半导体K<sub>0.85</sub>Fe<sub>1.54</sub>Se<sub>2</sub>的条纹反铁磁序的自旋激发，结果表明其自旋波谱可用具有高度各向异性面内耦合的有效海森堡哈密顿量精确描述，这暗示了铁基化合物的反铁磁性可能源于局部强关联效应而非弱耦合费米面嵌套。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.112.177002",
                arxiv: "https://arxiv.org/pdf/1405.4737",
                code: null
            }
        },
        {
            id: 148,
            title: "Quantum Renormalization Groups Based on Natural Orbitals",
            authors: "Rong-Qiang He and Zhong-Yi Lu",
            year: "2014",
            journal: "Physical Review B",
            volume: "89(8), 085108 (2014)",
            category: "prb",
            abstract: "该研究在自然轨道框架下推广量子重整化群方法至一般轨道空间，并在四杂质簇模型中与精确对角化对比验证其有效性，同时提出显著提升计算效率的捷径，并讨论其对簇DMFT及多杂质/多轨道Kondo问题的潜在影响。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.89.085108",
                arxiv: "https://arxiv.org/pdf/1306.3662",
                code: null
            }
        },
        {
            id: 149,
            title: "Electronic transport of a large scale system studied by renormalized transfer matrix method: application to armchair graphene nanoribbons between quantum wires",
            authors: "Miao Gao, Gui-Ping Zhang, Zhong-Yi Lu",
            year: "2014",
            journal: "Computer Physics Communications",
            volume: "185(3), 856 (2014)",
            category: "cpc",
            abstract: "该研究提出重整化传输矩阵方法以克服传统 TMM 在大尺度二维体系中的数值不稳定问题，将计算复杂度降至O(W<sup>3</sup>)，并成功用于含多达10<sup>6</sup>个碳原子的扶手椅石墨烯纳米带，揭示其纯态的弹道传输行为及长程相关无序诱导的金属–绝缘体转变，并表明该方法可推广至更一般的大尺度结构。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0010465513004189",
                arxiv: "https://arxiv.org/pdf/1305.6682",
                code: null
            }
        },
        {
            id: 150,
            title: "Layered pnictide-oxide Na<sub>2</sub>Ti<sub>2</sub>Pn<sub>2</sub>O (Pn=As, Sb): a paradigm for spin density waves",
            authors: "Xun-Wang Yan and Zhong-Yi Lu",
            year: "2013",
            journal: "Journal of Physics: Condensed Matter",
            volume: "25(36), 365501 (2013)",
            category: "Journal of Physics: Condensed Matter",
            abstract: "该研究通过第一性原理揭示 Na<sub>2</sub>Ti<sub>2</sub>Pn<sub>2</sub>O（Pn = As, Sb）兼具铜氧化物与铁基材料结构特征，并分别呈现阻塞式棋盘反铁磁半导体（As）与双条纹反铁磁半金属（Sb）基态，均由强费米面嵌套驱动的自旋密度波形成，其中 As 化合物还伴随与实验一致的四聚体结构畸变且保持空间群对称性。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0953-8984/25/36/365501",
                arxiv: "https://arxiv.org/pdf/1210.3481v1",
                code: null
            }
        },
        {
            id: 151,
            title: "Influence of spin-phonon coupling on antiferromagnetic spin fluctuations in FeSe under pressure: First-principles calculations with van der Waals corrections",
            authors: "Qian-Qian Ye, Kai Liu, and Zhong-Yi Lu",
            year: "2013",
            journal: "Physical Review B",
            volume: "88(20), 205130 (2013)",
            category: "prb",
            abstract: "该研究表明，在压力下 &beta;-FeSe 的 Fe-3d 能带与光学声子频率均发生显著变化，其中与 Se 高度相关的 A<sub>1</sub>g 模式在 5–6 GPa 出现频率突变，并在同一区间导致最强的局域磁矩零点振动波动，与实验中 T<sub>c</sub> 的最高压力范围一致，表明自旋-声子耦合在铁基超导机制中不可忽略。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.88.205130",
                arxiv: "https://arxiv.org/pdf/1309.2492",
                code: null
            }
        },
        {
            id: 152,
            title: "Spin Wave Excitations in AFe<sub>1.5</sub>Se<sub>2</sub> (A=K, Tl): Analytical Study",
            authors: "Miao Gao, Xun-Wang Yan, and Zhong-Yi Lu",
            year: "2013",
            journal: "Journal of Physics: Condensed Matter",
            volume: "25(3), 036004 (2013)",
            category: "Journal of Physics: Condensed Matter",
            abstract: "该研究解析了 AFe<sub>1.5</sub>Se<sub>2</sub>(A = K, Tl)在 4&times;2 共线反铁磁序中的自旋波谱，得到一条声学支与两条简并光学支，并基于第一性原理提取交换参数、量化量子涨落与其对自旋各向异性的敏感性，并计算自旋动力学结构因子以联系中子散射实验。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0953-8984/25/3/036004",
                arxiv: "https://arxiv.org/pdf/1210.2668",
                code: null
            }
        },
        {
            id: 153,
            title: "Atomic and electronic structures of FeSe monolayer and bilayer thin films on SrTiO<sub>3<>/sub (001): a first-principles study",
            authors: "Kai Liu, Zhong-Yi Lu, and Tao Xiang",
            year: "2012",
            journal: "Physical Review B",
            volume: "85(23), 235123 (2012)",
            category: "prb",
            abstract: "第一性原理计算研究表明，在 SrTiO<sub>3<>/sub (001) 衬底上的 FeSe 单层和双层薄膜表现为具有共线反铁磁序的轻微掺杂半导体，其费米面主要由 Fe-3d 轨道贡献，且 FeSe 的能带位置会随衬底（例如电子掺杂的 TiO<sub>2</sub> 终止的 SrTiO<sub>3</sub>）的不同而变化。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.85.235123",
                arxiv: "https://arxiv.org/pdf/1202.0538",
                code: null
            }
        },
        {
            id: 154,
            title: "Cluster dynamical mean field theory of quantum phases on a honeycomb lattice",
            authors: "Rong-Qiang He and Zhong-Yi Lu",
            year: "2012",
            journal: "Physical Review B",
            volume: "86(4), 045105 (2012)",
            category: "prb",
            abstract: "该工作基于蜂窝状晶格半满 Hubbard 模型的团簇动力学平均场理论计算发现，该体系在 Hubbard 相互作用 U 从 0 到 U<sub>c</sub>（在 4.6t 和 4.85t 之间）的基态存在一个自旋液体相，且在 U<sub>c</sub> 处向 N&eacute;el 反铁磁 Mott 绝缘相的转变是一级量子相变，其中电荷波动对稳定自旋液体相起着关键作用。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.86.045105",
                arxiv: "https://arxiv.org/pdf/1112.5124",
                code: null
            }
        },
        {
            id: 155,
            title: "Exact Results for Intrinsic Electronic Transport in Graphene",
            authors: "Shi-Jie Hu, Wei Du, Gui-Ping Zhang, Miao Gao, Zhong-Yi Lu, and Xiao-Qun Wang",
            year: "2012",
            journal: "Chinese Physics Letters",
            volume: "29(5), 057201 (2012)",
            category: "cpl",
            abstract: "该工作使用传输矩阵方法得到了连接到两个金属电极的石墨烯片电子输运特性的精确结果，发现在宽长比很大的极限下，armchair型石墨烯的狄拉克点电导率为 2e<sup>2</sup>/(&radic;<span style='text-decoration: overline'>3</span>h)，次泊松分布 Fano 因子约为 0.346，而zigzag型石墨烯的电导率为 0 且 Fano 因子为 1，这些结果反映了石墨烯拓扑结构和电极电子结构的关键影响。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0256-307X/29/5/057201",
                arxiv: "https://arxiv.org/pdf/1111.4862",
                code: null
            }
        },
        {
            id: 156,
            title: "First-principles study of Fe-based superconductors: A comparison of screened hybrid functional with gradient corrected functional",
            authors: "Kai Liu and Zhong-Yi Lu",
            year: "2011",
            journal: "Computational Materials Science",
            volume: "55(1), 284 (2011)",
            category: "cms",
            abstract: "本研究利用第一性原理杂化泛函计算方法，成功修正了传统LDA和GGA方法在研究BaFe<sub>2</sub>As<sub>2</sub>和&beta;-FeSe这两种铁基超导体材料时出现的半金属态和磁矩低估问题，揭示了强关联体系中交换作用的关键作用。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0927025611006367",
                arxiv: null,
                code: null
            }
        },
        {
            id: 157,
            title: "Pressure- and temperature-induced structural phase transitions of CaFe<sub>2</sub>As<sub>2</sub> and BaFe<sub>2</sub>As<sub>2</sub> studied in the Hund's rule correlation picture",
            authors: "Wei Ji, Xun-Wang Yan, and Zhong-Yi Lu",
            year: "2011",
            journal: "Physical Review B",
            volume: "83(13), 132504 (2011)",
            category: "prb",
            abstract: "本研究基于洪特规则关联图像，成功解释了CaFe<sub>2</sub>As<sub>2</sub>中观察到的特殊塌缩四方相变，并预测了BaFe<sub>2</sub>As<sub>2</sub>在不同压力下的相图，揭示了这类化合物中晶体结构、磁性和电子结构之间的复杂关联。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.83.132504",
                arxiv: "https://arxiv.org/pdf/1007.4766",
                code: null
            }
        },
        {
            id: 158,
            title: "Pnicogen-bridged antiferromagnetic superexchange interactions in iron pnictides",
            authors: "Zhong-Yi Lu, Fengjie Ma, and Tao Xiang",
            year: "2011",
            journal: "Journal of Physics and Chemistry of Solids",
            volume: "72(5), 319 (2011)",
            category: "Journal of Physics and Chemistry of Solids",
            abstract: "本文通过精细的第一性原理电子结构计算，不仅阐述了铁基超导体LaFeAsO和$BaFe<sub>2</sub>As<sub>2</sub>的预测磁性结构，更深入讨论了铁砷化物中由砷桥联的最近邻铁原子间反铁磁超交换作用所决定的磁性起源，并探讨了它与超导性之间的关联。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0022369710003690",
                arxiv: "https://arxiv.org/pdf/1009.0726",
                code: null
            }
        },
        {
            id: 159,
            title: "Superconductivity mediated by the antiferromagnetic spin-wave in chalcogenide iron-base superconductors",
            authors: "GuangMing Zhang, Zhong-Yi Lu, and Tao Xiang",
            year: "2011",
            journal: "Physical Review B",
            volume: "84(5), 052502 (2011)",
            category: "prb",
            abstract: "本研究提出K<sub>0.8+x</sub>Fe<sub>1.6+y</sub>Se<sub>2</sub>等铁基硒化物超导体的基态由掺杂反铁磁半导体模型哈密顿量描述，并证明超导性是由相干自旋波激发介导的有效配对势驱动的，从而自然解释了实验中观察到的超导与反铁磁长程有序的共存现象。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.84.052502",
                arxiv: "https://arxiv.org/pdf/1102.4575",
                code: null
            }
        },
        {
            id: 160,
            title: "Electronic structures and magnetic orders of Fe-vacancies ordered ternary iron selenides TlFe<sub>1.5</sub>Se<sub>2</sub> and AFe<sub>1.5</sub>Se<sub>2</sub> (A=K, Rb, or Cs)",
            authors: "Xun-Wang Yan, Miao Gao, Zhong-Yi Lu, and Tao Xiang",
            year: "2011",
            journal: "Physical Review Letters",
            volume: "106(8), 087005 (2011)",
            category: "prl",
            abstract: "通过第一性原理电子结构计算，本文发现TlFe<sub>1.5</sub>Se<sub>2</sub>基态为具有94 meV能隙的准二维共线反铁磁半导体，且其反铁磁序由硒桥联的超交换作用驱动；同时预测AFe<sub>1.5</sub>Se<sub>2</sub>（A = K, Rb, 或 Cs）也为反铁磁半导体，但因与零能隙或半金属态近简并而可能展现出复杂的物理特性和相图。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.106.087005",
                arxiv: "https://arxiv.org/pdf/1012.6015",
                code: null
            }
        },
        {
            id: 161,
            title: "Ternary iron selenide K<sub>0.8</sub>Fe<sub>1.6</sub>Se<sub>2</sub> is an antiferromagnetic semiconductor",
            authors: "Xun-Wang Yan, Miao Gao, Zhong-Yi Lu, and Tao Xiang",
            year: "2011",
            journal: "Physical Review B",
            volume: "83(23), 233205 (2011)",
            category: "prb",
            abstract: "这项研究利用第一性原理计算，确定了 K<sub>0.8</sub>Fe<sub>1.6</sub>Se<sub>2</sub> 的基态是由化学键驱动四聚体晶格畸变形成的准二维受阻棋盘状反铁磁半导体，并提出应将其（而非 KFe<sub>2</sub>Se<sub>2</sub>）视为超导电性出现的真正母体化合物。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.83.233205",
                arxiv: "https://arxiv.org/pdf/1102.2215",
                code: null
            }
        },
        {
            id: 162,
            title: "Electronic and magnetic structures of ternary iron selenides AFe<sub>2</sub>Se<sub>2</sub> (A=K, Cs, or Tl)",
            authors: "Xun-Wang Yan, Miao Gao, Zhong-Yi Lu, Tao Xiang",
            year: "2011",
            journal: "Physical Review B",
            volume: "84(5), 054502 (2011)",
            category: "prb",
            abstract: "本研究利用第一性原理计算揭示了三元铁硒化物 AFe<sub>2</sub>Se<sub>2</sub>（A = Cs、Rb、K 或 Tl）的基态是由 Se 4p 轨道介导的超交换相互作用导致的双共线反铁磁序，并确定了其在不同磁性状态下的电子结构及物理性质。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.84.054502",
                arxiv: "https://arxiv.org/pdf/1012.5536",
                code: null
            }
        },
        {
            id: 163,
            title: "The Electron Pairing of K<sub>x</sub>Fe<sub>2-y</sub>Se<sub>2</sub>",
            authors: "Fa Wang, Fan Yang, Miao Gao, Zhong-Yi Lu, Tao Xiang, and Dung-Hai Lee",
            year: "2011",
            journal: "Europhysics Letters",
            volume: "93(5), 57003 (2011)",
            category: "epl",
            abstract: "本研究利用两阶段功能重整化群方法研究了 K<sub>x</sub>Fe<sub>2-y</sub>Se<sub>2</sub> 的配对不稳定性，结果表明尽管缺乏空穴费米面，深埋的空穴带仍起到重要作用，导致该体系的低能有效相互作用可用以最近邻反铁磁相互作用 J<sub>1</sub> 为主的 J<sub>1</sub>-J<sub>2</sub> 模型描述，且其主导配对对称性为无节点的 d<sub>x<sup>2</sup>-y<sup>2</sup></sub> 波。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1209/0295-5075/93/57003",
                arxiv: "https://arxiv.org/pdf/1101.4390",
                code: null
            }
        },
        {
            id: 164,
            title: "Pressure-induced isostructural phase transition and correlation of FeAs coordination with the superconducting properties of 111-type Na<sub>1-x</sub>FeAs",
            authors: "Qingqing Liu, Xiaohui Yu, Xiancheng Wang, Zheng Deng, Yuxi Lv, Jinlong Zhu, Sijia Zhang, Haozhe Liu, Wenge Yang, Lin Wang, Hokwang Mao, Guoyin Shen, Zhong-Yi Lu, Yang Ren, Zhiqiang Chen, Zhijun Lin, Yusheng Zhao, Changqing Jin",
            year: "2011",
            journal: "Journal of the American Chemical Society",
            volume: "133(20), 7892 (2011)",
            category: "jacs",
            abstract: "本研究利用原位高压同步辐射X射线衍射技术揭示了111型 Na<sub>1–x</sub>FeAs 体系中存在压力诱导的四方到四方等结构相变，并发现超导转变温度 T<sub>c</sub> 随压力的非单调变化与 As 阴离子高度及 As–Fe–As 键角的结构异常密切相关。",
            links: {
                pdf: "https://pubs.acs.org/doi/10.1021/ja2009949",
                arxiv: "https://arxiv.org/pdf/1106.5640",
                code: null
            }
        },
        {
            id: 165,
            title: "Surface structures of ternary iron arsenides AFe<sub>2</sub>As<sub>2</sub> (A=Ba, Sr, or Ca)",
            authors: "Miao Gao, Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2010",
            journal: "Physical Review B",
            volume: "81(19), 193409 (2010)",
            category: "prb",
            abstract: "本研究通过第一性原理计算发现 AFe<sub>2</sub>As<sub>2</sub>(001) 解理面在能量上最倾向于形成具有 &radic;<span style='text-decoration: overline'>2</span>&times;&radic;<span style='text-decoration: overline'>2</span> 或 1&times;2 重构序的 A 端面，并阐明了 BaFe<sub>2</sub>As<sub>2</sub> 表面原子结构与 STM 图像之间的对应关系，从而解决了实验观测中的争议。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.81.193409",
                arxiv: null,
                code: null
            }
        },
        {
            id: 166,
            title: "Electronic structures of ternary iron arsenides AFe<sub>2</sub>As<sub>2</sub> (A=Ba, Ca, or Sr)",
            authors: "Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2010",
            journal: "Frontiers of Physics in China",
            volume: "5(2), 150 (2010)",
            category: "Frontiers of Physics in China",
            abstract: "本研究利用第一性原理密度泛函理论研究了三元铁砷化物 AFe<sub>2</sub>As<sub>2</sub>（A = Ba、Ca 或 Sr），发现由 As 4p 轨道介导的超交换相互作用导致其基态呈共线反铁磁序，且压力能显著抑制磁矩，最终提出可用 t-J<sub>H</sub>-J<sub>1</sub>-J<sub>2</sub> 模型描述其低能动力学。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/s11467-009-0076-9",
                arxiv: "https://arxiv.org/pdf/0806.3526",
                code: null
            }
        },
        {
            id: 167,
            title: "Surface and bulk electronic structures of LaFeAsO studied by angle-resolved photoemission spectroscopy",
            authors: "L. X. Yang, B. P. Xie, Y. Zhang, C. He, Q. Q. Ge, X. F. Wang, X. H. Chen, M. Arita, J. Jiang, K. Shimada, M. Taniguchi, I. Vobornik, G. Rossi, J. P. Hu, D. H. Lu, Z. X. Shen, Zhong-Yi Lu, and D. L. Feng",
            year: "2010",
            journal: "Physical Review B",
            volume: "82(10), 104519 (2010)",
            category: "prb",
            abstract: "本研究利用角分辨光电子能谱分析了铁砷超导母体 LaFeAsO 的电子结构，通过区分体态与表面态贡献，揭示了体能带在自旋密度波转变处约 25 meV 的位移及其对结构相变的关键作用，并观测到低温下显著的准粒子峰及表面能带中可能源于电子-声子相互作用的扭结结构。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.82.104519",
                arxiv: null,
                code: null
            }
        },
        {
            id: 168,
            title: "Electronic structure of Fe<sub>1.04</sub>(Te<sub>0.66</sub>Se<sub>0.34</sub>)",
            authors: "Fei Chen, Bo Zhou, Yan Zhang, Jia Wei, Hong-Wei Ou, Jia-Feng Zhao, Cheng He, Qing-Qin Ge, Masashi Arita, Kenya Shimada, Hirofumi Namatame, Masaki Taniguchi, Zhong-Yi Lu, Jiangping Hu, Xiao-Yu Cui, and D. L. Feng",
            year: "2010",
            journal: "Physical Review B",
            volume: "81(1), 014526 (2010)",
            category: "prb",
            abstract: "本研究利用高分辨率角分辨光电子能谱结合密度泛函理论计算，揭示了铁硫族超导体 Fe<sub>1.04</sub>(Te<sub>0.66</sub>Se<sub>0.34</sub>) 的电子结构，发现尽管存在约三倍的能带重整化，其能带对称性及布里渊区中心的三个空穴型费米面（含一椭圆形费米面）特征与理论预测定性一致，且未观测到自旋密度波迹象。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.81.014526",
                arxiv: "https://arxiv.org/pdf/1001.0855",
                code: null
            }
        },
        {
            id: 169,
            title: "Microstructure and superconductivity of Ir-doped BaFe<sub>2</sub>As<sub>2</sub> superconductor",
            authors: "X. L. Wang, H. Y. Shi, X.W. Yan, Y. C. Yuan, Zhong-Yi Lu, X. Q. Wang, T.-S. Zhao",
            year: "2010",
            journal: "Applied Physics Letters",
            volume: "96(1), 012507 (2010)",
            category: "apl",
            abstract: "本研究通过多种表征手段研究了 Ba(Fe<sub>1-x</sub>Ir<sub>x</sub>)<sub>2</sub>As<sub>2</sub> 多晶样品，发现在 x = 0.10 时样品具有 T<sub>C</sub> 约为 28 K 的体超导电性（为目前已报道电子掺杂 AFe<sub>2</sub>As<sub>2</sub> 型超导体中最高值）以及高达 65 T 的上临界场 H<sub>c2</sub>(0)。",
            links: {
                pdf: "https://pubs.aip.org/aip/apl/article-abstract/96/1/012507/118883/Microstructure-and-superconductivity-of-Ir-doped",
                arxiv: "https://arxiv.org/pdf/0912.4113",
                code: null
            }
        },
        {
            id: 170,
            title: "Raman phonons of &alpha;-FeTe and Fe<sub>1.03</sub>Se<sub>0.3</sub>Te<sub>0.7</sub> single crystals",
            authors: "Tian-Long Xia, D. Hou, S. C. Zhao, A. M. Zhang, G. F. Chen, J. L. Luo, N. L. Wang, J. H. Wei, Zhong-Yi Lu, Q. M. Zhang",
            year: "2009",
            journal: "Physical Review B",
            volume: "79(14), 140510(R) (2009)",
            category: "prb",
            abstract: "本研究通过测量单晶的偏振拉曼散射光谱并结合第一性原理计算，发现母体 &alpha;-FeTe 呈现清晰的 Te 原子 A<sub>1g</sub> 和 Fe 原子 B<sub>1g</sub> 模，而超导体 Fe<sub>1.03</sub>Se<sub>0.3</sub>Te<sub>0.7</sub> 仅显示软化的 Fe B<sub>1g</sub> 模，且虽然两者均未显现电子-声子耦合特征，但超导体在 300 cm<sup>-1</sup> 以下展现出可能源于电子贡献的微弱增强。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.79.140510",
                arxiv: "https://arxiv.org/pdf/0811.2350",
                code: null
            }
        },
        {
            id: 171,
            title: "First-Principles Calculations of the Electronic Structure of Tetragonal &alpha;-FeTe and &alpha;-FeSe Crystals: Evidence for a Bicollinear Antiferromagnetic Order",
            authors: "Fengjie Ma, Wei Ji, Jiangping Hu, Zhong-Yi Lu, and Tao Xiang",
            year: "2009",
            journal: "Physical Review Letters",
            volume: "102(17), 177003 (2009)",
            category: "prl",
            abstract: "本研究通过第一性原理计算发现，PbO 型四方相 &alpha;-FeTe 的基态是由 Te 5p 能带介导的最近邻、次近邻及次次近邻超交换相互作用竞争导致的双共线反铁磁序，而 &alpha;-FeSe 则呈现与 LaFeAsO 及 BaFe<sub>2</sub>As<sub>2</sub> 类似的共线反铁磁序，从而为理解铁基超导体的磁有序起源提供了新视角。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.177003",
                arxiv: null,
                code: null
            }
        },
        {
            id: 172,
            title: "Universal linear-temperature dependence of static magnetic susceptibility in iron pnictides",
            authors: "G. M. Zhang, Y. H. Su, Zhong-Yi Lu, Z. Y. Weng, D. H. Lee and T. Xiang",
            year: "2009",
            journal: "Europhysics Letters",
            volume: "86(3), 37006 (2009)",
            category: "epl",
            abstract: "本研究针对铁磷族化合物非磁性正常态中均匀磁化率表现出的普适线性温度依赖行为，提出该现象源于存在一个宽反铁磁涨落窗口，在此窗口内局域自旋密度波关联已存在但尚未建立全局方向序。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1209/0295-5075/86/37006",
                arxiv: "https://arxiv.org/pdf/0809.3874",
                code: null
            }
        },
        {
            id: 173,
            title: "Electronic Structure and Unusual Exchange Splitting in the Spin-Density-Wave State of the BaFe<sub>2</sub>As<sub>2</sub> Parent Compound of Iron-Based Superconductors",
            authors: "L. X. Yang, Y. Zhang, H. W. Ou, J. F. Zhao, D. W. Shen, B. Zhou, J. Wei, F. Chen, M. Xu, C. He, Y. Chen, Z. D. Wang, X. F. Wang, T. Wu, G. Wu, X. H. Chen, M. Arita, K. Shimada, M. Taniguchi, Zhong-Yi Lu, T. Xiang, and D. L. Feng",
            year: "2009",
            journal: "Physical Review Letters",
            volume: "102(10), 107002 (2009)",
            category: "prl",
            abstract: "本研究报道了对铁基超导体母体化合物 BaFe<sub>2</sub>As<sub>2</sub> 电子结构的首次直接测量，表明其自旋密度波能量的降低主要源于能带结构的奇异交换分裂，为后续研究奠定了基础。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.102.107002",
                arxiv: "https://arxiv.org/pdf/0806.2627",
                code: null
            }
        },
        {
            id: 174,
            title: "&pi;-Junction to Probe Antiphase s-Wave Pairing in Iron Pnictide Superconductors",
            authors: "Wei-Qiang Chen, Fengjie Ma, Zhong-Yi Lu, and Fu-Chun Zhang",
            year: "2009",
            journal: "Physical Review Letters",
            volume: "103(20), 207001 (2009)",
            category: "prl",
            abstract: "本研究通过分析具有反相 <i>s</i> 波配对的 FeAs 基超导体与常规 <i>s</i> 波超导体构成的约瑟夫森结，发现平面结的平移不变性显著增强了电子费米囊对临界电流的贡献，且在宽掺杂区内平面结与点接触结具有相反相位，从而提出利用 &pi; 相位三结环来探测这种反相配对特性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.103.207001",
                arxiv: "https://arxiv.org/pdf/0906.0169",
                code: null
            }
        },
        {
            id: 175,
            title: "Raman spectra in iron-based quaternary CeO<sub>1−x</sub>F<sub>x</sub>FeAs and LaO<sub>1−x</sub>F<sub>x</sub>FeAs",
            authors: "S. C. Zhao, D. Hou, Y. Wu, T. L. Xia, A. M. Zhang, G. F. Chen, J. L. Luo, N. L. Wang, J. H. Wei, Zhong-Yi Lu, and Q. M. Zhang",
            year: "2009",
            journal: "Superconductor Science and Technology",
            volume: "22(1), 015017 (2009)",
            category: "Superconductor Science and Technology",
            abstract: "本研究通过对铁基四元化合物 CeO<sub>1-x</sub>F<sub>x</sub>FeAs 和 LaO<sub>1-x</sub>F<sub>x</sub>FeAs 进行拉曼光谱测量及第一性原理计算，指认了声子模式，发现 F 掺杂主要抑制 La 系中与 La 相关的 E<sub>g</sub> 和 A<sub>1g</sub> 模，而在 Ce 系中观测到位于 450 cm<sup>-1</sup> 附近的尖锐氧 E<sub>g</sub> 模，且 500 cm<sup>-1</sup> 以上的高能特征可能源于多声子过程、磁涨落或 d 轨道带间跃迁。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0953-2048/22/1/015017",
                arxiv: "https://arxiv.org/pdf/0806.0885",
                code: null
            }
        },
        {
            id: 176,
            title: "Iron-based layered compound LaFeAsO is an antiferromagnetic semimetal",
            authors: "Fengjie Ma and Zhong-Yi Lu",
            year: "2008",
            journal: "Physical Review B",
            volume: "78(3), 033111 (2008)",
            category: "prb",
            abstract: "本研究表明铁基超导母体 LaFeAsO 是一种准二维反铁磁半金属，其源于费米面嵌套的公度自旋密度波导致 Fe 原子具有 2.3 &mu;<sub>B</sub> 的磁矩，且 F 掺杂后的超导电性被认为是由自旋涨落介导的新机制。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.78.033111",
                arxiv: null,
                code: null
            }
        },
        {
            id: 177,
            title: "Arsenic-bridged antiferromagnetic superexchange interactions in LaFeAsO",
            authors: "Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2008",
            journal: "Physical Review B",
            volume: "78(22), 224517 (2008)",
            category: "prb",
            abstract: "本研究通过第一性原理计算发现 LaFeAsO 中每个 Fe 离子具有约 2.6 &mu;<sub>B</sub> 的大磁矩，且由 As 原子介导的强最近邻和次近邻超交换相互作用导致了基态的共线反铁磁序及磁驱动的结构相变，进而揭示了反铁磁涨落在该类材料超导配对机制中的重要作用。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.78.224517",
                arxiv: null,
                code: null
            }
        },
        {
            id: 178,
            title: "Publisher's Note: Arsenic-bridged antiferromagnetic superexchange interactions in LaFeAsO [Phys. Rev. B 78, 224517 (2008)]",
            authors: "Fengjie Ma, Zhong-Yi Lu, and Tao Xiang",
            year: "2009",
            journal: "Physical Review B",
            volume: "79(1), 019901 (2009)",
            category: "prb",
            abstract: "本文于 2008 年 12 月 18 日在线发表时图 6 和图 7 存在错误，随后于 12 月 30 日完成更正，且印刷版本中的图片均正确无误。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.79.019901",
                arxiv: null,
                code: null
            }
        },
        {
            id: 179,
            title: "Multichannel interaction mechanism in a molecule-metal interface",
            authors: "Wei Ji, Zhong-Yi Lu, and Hong-Jun Gao",
            year: "2008",
            journal: "Physical Review B",
            volume: "77(11), 113406 (2008)",
            category: "prb",
            abstract: "本研究利用第一性原理密度泛函理论计算揭示了 PTCDA 与 Ag(111) 界面特征为多通道分子轨道相互作用，其中通过占据电子态的相互作用主要位于 PTCDA 边缘，而通过未占据态的相互作用则位于中心，从而为解释相关实验现象提供了统一图像并探讨了受限二维类自由电子界面态。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.77.113406",
                arxiv: null,
                code: null
            }
        },
        {
            id: 180,
            title: "Electron core-hole interaction and its induced ionic structural relaxation in molecular systems under x-ray irradiation",
            authors: "Wei Ji, Zhong-Yi Lu, and Hongjun Gao",
            year: "2006",
            journal: "Physical Review Letters",
            volume: "97(24), 246101 (2006)",
            category: "prl",
            abstract: "本研究表明，虽然第一性原理基态计算难以重现 Ag(111) 表面 PTCDA 和 16FCuPc 的垂直入射 X 射线驻波实验结果，但在考虑了包含价电子屏蔽核心孔及离子结构弛豫的初态和终态效应后，理论计算能很好地拟合实验数据，从而证明了屏蔽效应在此类表面分子表征中的重要性。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.246101",
                arxiv: null,
                code: null
            }
        },
        {
            id: 181,
            title: "First-principles theory of quantum well resonance in double barrier magnetic tunnel junctions",
            authors: "Yan Wang, Zhong-Yi Lu, X.-G. Zhang, and X.-F. Han",
            year: "2006",
            journal: "Physical Review Letters",
            volume: "97(8), 087210 (2006)",
            category: "prl",
            abstract: "本研究从第一性原理出发，计算了 Fe(001)/MgO/Fe/MgO/Fe 双势垒磁性隧道结中的量子阱（QW）共振。表明在低温下主要的展宽来源是库仑阻塞能的变化。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.97.087210",
                arxiv: null,
                code: null
            }
        },
        {
            id: 182,
            title: "First-principles theory of tunneling currents in metal-oxide-semiconductor structures",
            authors: "X.-G. Zhang, Zhong-Yi Lu, and S. T. Pantelides",
            year: "2006",
            journal: "Applied Physics Letters",
            volume: "89(3), 032112 (2006)",
            category: "apl",
            abstract: "我们证明，在极小偏压下的电导是基态性质，可利用密度泛函理论以及交换和关联的局域密度近似进行精确计算。在有限偏压下，必须恰当考虑交换关联势的不连续性。同时指出了理论和实验所面临的挑战。",
            links: {
                pdf: "https://pubs.aip.org/aip/apl/article-abstract/89/3/032112/917174/First-principles-theory-of-tunneling-currents-in?redirectedFrom=fulltext",
                arxiv: null,
                code: null
            }
        },
        {
            id: 183,
            title: "Spin-dependent resonant tunneling through quantum-well states in magnetic metallic thin films",
            authors: "Zhong-Yi Lu, X.G. Zhang, and S. Pantelides",
            year: "2005",
            journal: "Physical Review Letters",
            volume: "94(20), 207210 (2005)",
            category: "prl",
            abstract: "我们证明，在共振状态下，电流会增加 1 到 2 个数量级。隧道磁阻比在简单自旋隧道结中要大得多，并且对于多数自旋（少数自旋）共振，其值为正（负），正负偏压之间存在很大的不对称性。这些结果可作为新型自旋电子器件的基础。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.94.207210",
                arxiv: "https://arxiv.org/pdf/cond-mat/0411233",
                code: null
            }
        },
        {
            id: 184,
            title: "A first-principles study of Group IV dimer chains on Si(100)",
            authors: "T. L. Chan, C. Z. Wang, Zhong-Yi Lu, and K.M. Ho",
            year: "2005",
            journal: "Physical Review B",
            volume: "72(4), 045405 (2005)",
            category: "prb",
            abstract: "本研究表明，混合二聚体的形成取决于可用于铅和锡进行相互混合的硅原子的来源。只有当硅原子与铅或锡共沉积，或者二聚体链形成在硅（100）衬底的台阶边缘附近时，混合二聚体链在能量上才比纯二聚体链更有利。在硅（100）表面，类似于锗与硅相互掺杂的这种机制对于铅和锡来说并不受青睐。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.72.045405",
                arxiv: null,
                code: null
            }
        },
        {
            id: 185,
            title: "First-principles studies of structures and stabilities of Pb/Si(111)",
            authors: "T. L. Chan, C. Z. Wang, M. Hupalo, M. C. Tringides, Zhong-Yi Lu, and K. M. Ho",
            year: "2003",
            journal: "Physical Review B",
            volume: "68(4), 045410 (2003)",
            category: "prb",
            abstract: "本研究表明，我们比较了不同结构的晶胞能量，以推断出能量更有利的结构。由非常平坦的 Pb 层覆盖构成的结构比缺失顶层结构或具有堆垛缺陷的结构具有更低的能量。这与测量到在α相上具有高 Pb 传输率的实验结果非常吻合。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.68.045410",
                arxiv: null,
                code: null
            }
        },
        {
            id: 186,
            title: "Mixed PbSi dimer chains on Si(100): a first-principles study",
            authors: "T. L. Chan, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "2003",
            journal: "Surface Science",
            volume: "542(3), L649 (2003)",
            category: "surf. sci.",
            abstract: "我们发现铅原子与硅原子混合形成混合二聚体链在能量上是更有利的，这与之前的研究所假设的铅-铅二聚体链不同。在铅覆盖度达到 0.125 麦克尔逊当量时，混合的铅-硅二聚体链每个铅原子的能量比铅二聚体链低 0.19 电子伏特。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0039602803009932",
                arxiv: null,
                code: null
            }
        },
        {
            id: 187,
            title: "Structure, properties, and dynamics of oxygen vacancies in amorphous SiO<sub>2</sub>",
            authors: "Zhong-Yi Lu, C. J. Nicklaw, D. M. Fleetwood, R. D. Schrimpf, and S. T. Pantelides",
            year: "2002",
            journal: "Physical Review Letters",
            volume: "89(28), 285505 (2002)",
            category: "prl",
            abstract: "我们发现，绝大多数的氧空位在捕获一个空穴后不会发生扭曲，而是成为浅层陷阱。剩余的空位则表现出两种不同的扭曲类型。当捕获一个电子时，一种类型会形成一种亚稳态偶极子，而另一种则会坍缩成一个二聚体。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.89.285505",
                arxiv: null,
                code: null
            }
        },
        {
            id: 188,
            title: "Unified model of hole trapping, 1/f noise, and thermally stimulated current in MOS devices",
            authors: "D. M. Fleetwood, H. D. Xiong, Zhong-Yi Lu, C. J. Nicklaw, J. A. Felix, R. D. Schrimpf, and S. T. Pantelides",
            year: "2002",
            journal: "IEEE Transactions on Nuclear Science",
            volume: "49(6), 2674 (2002)",
            category: "IEEE Transactions on Nuclear Science",
            abstract: "DFT 结果表明 MOS 器件中的 1/f 噪声主要源于界面附近两类氧空位缺陷（Eδ′ 二聚体与两种构型的 Eγ′ 中心）的载流子俘获与释放过程，并能一致解释氧化物陷阱、电荷噪声及 TSC 实验中的空穴发射现象。",
            links: {
                pdf: "https://ieeexplore.ieee.org/abstract/document/1134203/",
                arxiv: null,
                code: null
            }
        },
        {
            id: 189,
            title: "Mixed SiGe ad-dimer on Si(001):diffusion triggers intermixing",
            authors: "Zhong-Yi Lu, C. Z. Wang, and K.M. Ho",
            year: "2002",
            journal: "Surface Science",
            volume: "506(3), L282 (2002)",
            category: "surf. sci.",
            abstract: "我们通过第一性原理的总能量计算来研究该系统中扩散和混合的原子级机制。我们的计算表明，混合是由表面的吸附二聚体的扩散所引发的。从我们的计算中得出的扩散和混合事件的能量障碍与实验结果高度吻合。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0039602802014966",
                arxiv: null,
                code: null
            }
        },
        {
            id: 190,
            title: "The structure, properties, and dynamics of oxygen vacancies in amorphous SiO<sub>2</sub>",
            authors: "C. J. Nicklaw, Zhong-Yi Lu, D. M. Fleetwood, R. D. Schrimpf, and S. T. Pantelides",
            year: "2002",
            journal: "IEEE Transactions on Nuclear Science",
            volume: "49(6), 2667 (2002)",
            category: "IEEE Transactions on Nuclear Science",
            abstract: "无定形 SiO<sub>2</sub>中不同局域结构导致氧空位缺陷态分布，并存在可解释反偏置切换行为的五配位弯曲构型 Eγ⁵′，其能级分布与实验的浅、深空穴俘获一致，且大多数氧空位在俘获空穴后形成二聚体，其余则在可形成或不可形成偶极的弯曲构型间近乎均分。",
            links: {
                pdf: "https://ieeexplore.ieee.org/abstract/document/1134202",
                arxiv: null,
                code: null
            }
        },
        {
            id: 191,
            title: "The anisotropic free energy of the solid-liquid phase boundary in Al",
            authors: "J. R. Morris, Zhong-Yi Lu, Y. Y. Ye, and K.M. Ho",
            year: "2002",
            journal: "Interface Science",
            volume: "10(2-3), 143 (2002)",
            category: "Interface Science",
            abstract: "我们发现，界面自由能γ(θ)可以用形式γ(θ) = γ0(1 + ε cos 4θ)来很好地表示，其中θ表示相对于[100]界面的角度，且该角度围绕[001]方向旋转。我们得出γ0的值为120 ± 6 mJ/m²，ε的值为1.3 ± 0.4%，这与之前的估计值和当前的实验结果相符。",
            links: {
                pdf: "https://link.springer.com/article/10.1023/A:1015800629100",
                arxiv: null,
                code: null
            }
        },
        {
            id: 192,
            title: "Dimer-flipping-assisted diffusion on a Si(001) surface",
            authors: "J. Zi, B. J. Min, Zhong-Yi Lu, C. Z. Wang, and K. M. Ho",
            year: "2000",
            journal: "Applied Physics Letters",
            volume: "77(25), 4184 (2000)",
            category: "apl",
            abstract: "通过结合环境依赖型硅势能的紧束缚方法以及采用卡-帕里内洛方法的从头算计算，对硅原子在重构的硅（001）表面上的结合位点和扩散路径进行了研究。发现了一种由二聚体翻转驱动的沿凹槽边缘的新的扩散路径，其势垒为 0.74 电子伏特，与沿二聚体行顶部的 0.68 电子伏特的势垒相当。",
            links: {
                pdf: "https://pubs.aip.org/aip/apl/article-abstract/77/25/4184/515637/Dimer-flipping-assisted-diffusion-on-a-Si-001",
                arxiv: null,
                code: null
            }
        },
        {
            id: 193,
            title: "Unique Dynamic Appearance of a Ge-Si Ad-Dimer on Si(001)",
            authors: "Zhong-Yi Lu, Feng Liu, C. Z. Wang, X.R. Qin, B. S. Swartzentruber, M. G. Lagally, and K.M. Ho",
            year: "2000",
            journal: "Physical Review Letters",
            volume: "85(26), 5603 (2000)",
            category: "prl",
            abstract: "我们通过第一性原理计算，对硅（001）表面二维链上相邻的硅-硅、锗-锗和锗-硅二聚体的能态和动力学特性进行了对比研究。锗-硅二聚体的动态表现与硅-硅或锗-锗二聚体有显著差异，这为通过扫描隧道显微镜（STM）对其进行识别提供了一种独特的方法。在扫描隧道显微镜中观察到的“摆动”运动实际上反映了二聚体的 180°旋转，涉及分段旋转机制。计算得出的 0.74 电子伏特的能量屏障与实验值 0.82 电子伏特非常吻合。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.85.5603",
                arxiv: null,
                code: null
            }
        },
        {
            id: 194,
            title: "Correlated piecewise diffusion of a Ge addimer on Si(001) surface",
            authors: "Zhong-Yi Lu, C. Z. Wang, and K. M. Ho",
            year: "2000",
            journal: "Physical Review B",
            volume: "62(12), 8104 (2000)",
            category: "prb",
            abstract: "我们进行了大量的第一性原理计算，以研究锗二聚体在硅（001）表面的结合与扩散情况。发现锗二聚体沿着最低能量障碍路径的扩散是分段式的，但具有很强的相关性，其能量障碍为 0.77 电子伏特。在硅（001）表面，硅二聚体也发现了这种相关的分段式扩散路径，其能量障碍为 1.02 电子伏特，与实验测量结果高度吻合。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.62.8104",
                arxiv: null,
                code: null
            }
        },
        {
            id: 195,
            title: "Structures and dynamical properties of C-n, Si-n, Ge-n, and Sn-n clusters with n up to 13",
            authors: "Zhong-Yi Lu, C. Z. Wang, and K. M. Ho",
            year: "2000",
            journal: "Physical Review B",
            volume: "61(3), 2329 (2000)",
            category: "prb",
            abstract: "对 Si𝑛、Ge𝑛 和 Sn𝑛（𝑛 <~1⁢3）的团簇进行了卡-帕里内洛分子动力学模拟退火计算。我们研究了这些团簇从“液态”相转变为“固态”相，以及从“固态”相转变为基态结构的温度区间。此外，还对选定为小碳团簇原型的 C13 团簇进行了额外的模拟退火计算。除了发现 Sn 和 Ge 团簇的结构外，我们的模拟结果还为团簇的形成动力学提供了见解。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.61.2329",
                arxiv: null,
                code: null
            }
        },
        {
            id: 196,
            title: "Addimer diffusion along the trough between dimer rows on Si(001)",
            authors: "G. D. Lee, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "1999",
            journal: "Surface Science",
            volume: "426(2), L427 (1999)",
            category: "surf. sci.",
            abstract: "通过使用环境依赖型紧束缚硅势能以及基于从头算方法的计算，对硅（001）表面波谷处的扩散路径进行了研究。发现了一条新的扩散路径，该路径由加元的旋转构成。计算得出每个二聚体的能量势垒为 1.22 电子伏特，与实验结果高度吻合。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/S0039602899003507",
                arxiv: null,
                code: null
            }
        },
        {
            id: 197,
            title: "Addimer Diffusion on the Si(100) Surface",
            authors: "G. D. Lee, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "1999",
            journal: "Surface Review and Letters",
            volume: "6(6), 1015 (1999)",
            category: "Surface Review and Letters",
            abstract: "通过使用环境依赖型紧束缚硅势能模型进行的紧束缚分子动力学计算，以及采用卡-帕里内洛方法进行的从头算计算，对硅加米器沿凹槽扩散以及从凹槽扩散至硅(100)表面二聚体行列顶部的过程进行了研究。研究发现了由加米器旋转构成的新扩散路径。这些新路径的能量障碍与实验数据高度吻合，并且比之前研究的其他扩散路径更具能量优势。",
            links: {
                pdf: "https://www.worldscientific.com/doi/abs/10.1142/S0218625X99001098",
                arxiv: null,
                code: null
            }
        },
        {
            id: 198,
            title: "Structures of Germanium Clusters: Where the Growth Patterns of Silicon and Germanium Clusters Diverge",
            authors: "A. A. Shvartsburg, B. Liu, Zhong-Yi Lu, C. Z. Wang, M. F. Jarrold, and K. M. Ho",
            year: "1999",
            journal: "Physical Review Letters",
            volume: "83(11), 2167 (1999)",
            category: "prl",
            abstract: "我们利用密度泛函理论 - 局部密度近似和梯度校正方法，对 n≤16 量级的锗中性原子和阳离子的基态几何结构进行了系统搜索。与硅的类似物一样，中等大小的锗簇是由三棱锥三角柱子单元堆叠而成的。然而，对于 n = 13 和 n ≥ 15 的情况，锗 n 型和硅 n 型的结构在细节上有所不同。通过测量气相离子迁移率、裂解途径和解离能，证实了硅和锗簇生长模式之间结构差异的出现。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.2167",
                arxiv: null,
                code: null
            }
        },
        {
            id: 199,
            title: "Addimer diffusions on Si(001) surface",
            authors: "G. D. Lee, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "1999",
            journal: "Journal of Korean Physical Society",
            volume: "35(1), S27 (1999)",
            category: "Journal of Korean Physical Society",
            abstract: "通过扫描隧道显微镜定量测定了硅原子在硅（001）表面上的表面扩散系数。该方法基于在给定沉积剂量、给定沉积速率下，针对不同衬底温度计算所形成的岛的数量。在最简单的情况下，扩散系数与岛的密度有关，与台阶处剥落区域的宽度有关，其关系式分别为：.扩散的活化能为 Ea = 0.67±0.08 电子伏特，扩散常数 D0 ≅ 10−3±1 平方厘米。这种扩散具有高度的各向异性，其快速方向沿二聚体行排列方向。",
            links: {
                pdf: "https://www.sciencedirect.com/science/article/abs/pii/003960289290968C",
                arxiv: null,
                code: null
            }
        },
        {
            id: 200,
            title: "Theory of the 2×2 and 3×3 reconstructions of the alpha-Sn(111) surface",
            authors: "Zhong-Yi Lu, G. L. Chiarotti, S. Scandolo, and E. Tosatti",
            year: "1998",
            journal: "Il Nuovo Cimento D",
            volume: "20(7-8), 1013 (1998)",
            category: "Il Nuovo Cimento D",
            abstract: "本研究对于α-Sn（111）表面（在InSb（111）上进行的外延生长），已有两种主要的重构模式被报道，即2×2和一种亚稳态的3×3。我们基于我们团队进行的第一性原理电子结构计算，探讨了这些重构的可能性质。",
            links: {
                pdf: "https://link.springer.com/article/10.1007/BF03185506",
                arxiv: null,
                code: null
            }
        },
        {
            id: 201,
            title: "First-principles determination of the Sigma＝13 [510] symmetric tilt boundary structure in silicon and germanium",
            authors: "J. R. Morris, Zhong-Yi Lu, D. M. Ring, J. B. Xiang, K. M. Ho, C. Z. Wang, and c. L. Fu",
            year: "1998",
            journal: "Physical Review B",
            volume: "58(17), 11241 (1998)",
            category: "prb",
            abstract: "我们通过紧束缚模型和第一性原理计算，对硅和锗中的{510}对称倾斜边界结构进行了多种研究。这些计算表明，在硅中所观察到的结构是能量最低的结构，尽管它比保持四重配位所需的结构更为复杂。与使用泰索夫势的计算结果相反，第一性原理计算表明能量取决于结构。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.58.11241",
                arxiv: null,
                code: null
            }
        },
        {
            id: 202,
            title: "Ad-Dimer Diffusion between Trough and Dimer Row on Si(100)",
            authors: "G. D. Lee, C. Z. Wang, Zhong-Yi Lu, and K. M. Ho",
            year: "1998",
            journal: "Physical Review Letters",
            volume: "81(26), 5872 (1998)",
            category: "prl",
            abstract: "通过使用环境依赖型紧束缚硅势能以及采用卡-帕里内洛方法的从头算计算，对硅（100）表面凹槽与二聚体行之间的扩散路径进行了研究。研究发现了一种新的扩散路径，该路径由吸附二聚体的旋转构成。计算得到的能量势垒与实验结果高度吻合，并且比平行和垂直吸附二聚体的其他扩散路径在能量上更具优势。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.81.5872",
                arxiv: null,
                code: null
            }
        },
        {
            id: 203,
            title: "Dissociation Energies of Silicon Clusters: A Depth Gauge for the Global Minimum on the Potential Energy Surface",
            authors: "A. A. Shvartsburg, M. F. Jarrold, B. Liu, Zhong-Yi Lu, C. Z. Wang, and K. M. Ho",
            year: "1998",
            journal: "Physical Review Letters",
            volume: "81(21), 4616 (1998)",
            category: "prl",
            abstract: "我们对 n≤26 范围内的硅中性粒子和阳离子的解离过程进行了建模。假设为统计分解过程，我们计算了 n = 26 之前的裂解路径以及 n = 20 之前的解离能量。对于阳离子的结果与测量值高度吻合。这表明我们在这一尺寸范围内的硅团簇的构型空间搜索确实找到了全局最小值——一组“堆叠的 Si9 三顶角三棱柱”。这是首次将解离能量用于检验全局优化的结果。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.81.4616",
                arxiv: null,
                code: null
            }
        },
        {
            id: 204,
            title: "Ionization of medium-sized silicon clusters and the geometries of the cations",
            authors: "B. Liu, Zhong-Yi Lu, B. Pan, C. Z. Wang, K. M. Ho, A. A. Shvartsburg, and M. F. Jarrold",
            year: "1998",
            journal: "Journal of Chemical Physics",
            volume: "109(21), 9401 (1998)",
            category: "jcp",
            abstract: "本研究表明，中等尺寸 Si⁺ₙ 的基态结构总体呈细长的三帽三棱柱堆叠形，但若干 n 值（8、11、12、13）存在显著差异；GGA 使这些细长构型与近球形构型能量几乎相当，并在移动性与电离能趋势上与实验一致，从而支持将“细长”硅簇解释为三棱柱堆叠结构。",
            links: {
                pdf: "https://pubs.aip.org/aip/jcp/article-abstract/109/21/9401/183186/Ionization-of-medium-sized-silicon-clusters-and",
                arxiv: null,
                code: null
            }
        },
        {
            id: 205,
            title: "Structures of medium-sized silicon clusters",
            authors: "K. M. Ho, A. Shvartsburg, B. Pan, Zhong-Yi Lu, C. Z. Wang, J. Wacker, J. L. Fye, and M. F. Jarrold",
            year: "1998",
            journal: "Nature",
            volume: "392(1), 582 (1998)",
            category: "nature",
            abstract: "本研究表明：对中等尺寸硅簇进行遗传算法全局搜索并以迁移率实验验证，其稳定结构并非块体片段，而是 n=12–18 时由 Si₉ 三帽三棱柱堆叠组成、n≥19 时转变为近球形笼状构型，且实验迁移率与计算结果高度一致但转变位置略受熵影响。",
            links: {
                pdf: "https://www.nature.com/articles/33369",
                arxiv: null,
                code: null
            }
        },
        {
            id: 206,
            title: "Atomic and electronic structure of ideal and reconstructed alpha-Sn (100) surfaces",
            authors: "Zhong-Yi Lu, G. L. Chiarotti, S. Scandolo, and E. Tosatti",
            year: "1998",
            journal: "Physical Review B",
            volume: "58(20), 13698 (1998)",
            category: "prb",
            abstract: "本研究表明，α‑Sn(100) 表面会形成强烈起伏（约 1.0 Å）的反铁序排列表面二聚体，使表面能大幅降低，并呈现近简并的 c(4×2) 与 p(2×2) 重构，其振动与能级特征与实验观测高度相关。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.58.13698",
                arxiv: null,
                code: null
            }
        },
        {
            id: 207,
            title: "Atomic and electronic structure of ideal and reconstructed alpha-Sn (111) surface",
            authors: "Zhong-Yi Lu, G. L. Chiarotti, S. Scandolo, and E. Tosatti",
            year: "1996",
            journal: "Physical Review B",
            volume: "54(16), 11769 (1996)",
            category: "prb",
            abstract: "本研究表明，α‑Sn(111) 的理想表面极不稳定，其稳定结构在多种重构间竞争，若无加成原子则以 2×1 π 键链重构为主，若有加成原子则倾向于 c(4×2)/(2×2) 重构，并伴随比 Si、Ge 更强的表面起伏和电荷转移。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.54.11769",
                arxiv: null,
                code: null
            }
        },
        {
            id: 208,
            title: "Impurity energy level in the Haldane gap",
            authors: "Wei Wang, Shaojin Qin, Zhong-Yi Lu, Lu Yu, and Zhaobin Su",
            year: "1996",
            journal: "Physical Review B",
            volume: "53(1), 40 (1996)",
            category: "prb",
            abstract: "数值密度矩阵重整化分析表明：在一维反铁磁自旋‑1 链中，杂质键 J′ 会在 Haldane 能隙内形成束缚态，且当 J′<J 时能级随偏差连续从隙边移动到基态，而当 J′≳J 时需偏差超过约 0.3 才出现该束缚态。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.53.40",
                arxiv: null,
                code: null
            }
        },
        {
            id: 209,
            title: "Doping Induced Quantum Bound States within the Haldane Gap",
            authors: "Zhong-Yi Lu, Zhao-Bin Su, and Lu Yu",
            year: "1995",
            journal: "Physical Review Letters",
            volume: "74(21), 4297 (1995)",
            category: "prl",
            abstract: "采用齐塔茨塔尔和穆勒-哈特曼提出的方法，我们明确地证明，在哈德曼能隙的中心存在量子束缚态，这些束缚态可以通过在一种自旋为 1 的线性链海森堡反铁磁体中掺杂来产生。我们计算了由这些束缚态引起的动态结构因子 𝑆⁡(𝑞，𝜔) ，并利用它来解释最近对掺杂的 Y2⁢BaNiO5 的中子散射实验。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74.4297",
                arxiv: null,
                code: null
            }
        },
        {
            id: 210,
            title: "Doping Effect on Spin-Peierls Instability",
            authors: "Zhong-Yi Lu, Zhao-Bin Su, and Lu Yu",
            year: "1994",
            journal: "Physical Review Letters",
            volume: "72(8), 1276 (1994)",
            category: "prl",
            abstract: "我们利用单模平均场理论研究了掺杂对自旋佩尔利斯（SP）系统的影响。杂质自旋会改变单重价键场，并使磁性激发发生重整化。SP 转变温度和磁性激发的能量间隙分别会因因子 ∼𝑛𝑖 和 ∼𝑛2/3𝑖 而降低，其中 𝑛?? 为杂质密度。在某些 𝑛𝑖 值下，会出现无能隙的 SP 相，并且杂质之间的相互作用会变得类似于 RKKY 形式。最近观察到的掺杂导致的 SP 转变温度降低以及出现自旋玻璃相的现象，可以用所提出的理论来解释。",
            links: {
                pdf: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.72.1276",
                arxiv: null,
                code: null
            }
        },
        {
            id: 211,
            title: "Haldane Energy Gap of A Doped Linear-Chain Heisenberg Antiferromagnet",
            authors: "Zhong-Yi Lu, Zhao-Bin Su, and Lu Yu",
            year: "1993",
            journal: "Physical Review B",
            volume: "47(18), 12276 (1993)",
            category: "prb",
            abstract: "基于 VBS 与 Schwinger‑boson 平均场分析，自旋‑1 链的 Haldane 能隙会因不同自旋的杂质掺杂而缩小，并按约 nᵢ^(2/3) 的规律衰减，在 nᵢ≈1/ξ 时完全塌缩，这一预测可由中子散射实验验证。",
            links: {
                pdf: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.47.12276",
                arxiv: null,
                code: null
            }
        },
        {
            id: 212,
            title: "The q-Deformed SU(2) Quantum Antiferromagnetic Model",
            authors: "Zhong-Yi Lu and Hong Yan",
            year: "1993",
            journal: "Communications in Theoretical Physics",
            volume: "19(3), 303 (1993)",
            category: "ctp",
            abstract: "在本文中，我们建立了一个 q 类似的霍尔斯坦-普里马科夫变换（HPT），并得到了 q 改变的自旋波解。我们采用了平均场处理方法，该方法旨在保留哈密顿量的一些非线性特性，结果非常有趣，例如，发现了具有间隔的基元激发谱，这与常规模型的自旋波结果不同，并且因此热容也发生了很大变化。我们研究了奈尔态和基态的性质。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0253-6102/19/3/303/meta",
                arxiv: null,
                code: null
            }
        },
        {
            id: 213,
            title: "The q-Deformed SU(2) Quantum Ferromagnetic Model",
            authors: "Zhong-Yi Lu and Hong Yan",
            year: "1993",
            journal: "Communications in Theoretical Physics",
            volume: "19(2), 169 (1993)",
            category: "ctp",
            abstract: "在构建 q 变形 SU(2) Heisenberg 自旋模型并得到 q 变形自旋波解后可知：其基态仍为通常铁磁态但与激发态间存在能隙，且非线性参数 γ 会使比热出现 ∝T^1/2 γ² 的新项并修正磁化强度。",
            links: {
                pdf: "https://iopscience.iop.org/article/10.1088/0253-6102/19/2/169/meta",
                arxiv: null,
                code: null
            }
        },
        {
            id: 214,
            title: "The Superfluidity of The Charged Bosons' Systems",
            authors: "Zhong-Yi Lu",
            year: "1993",
            journal: "Communications in Theoretical Physics",
            volume: "19(1), 43 (1993)",
            category: "ctp",
            abstract: "我们构建了一个玻色子模型，在该模型中，一个玻色子带有电荷 - \(|\epsilon|\) ，并且存在一个正且均匀的背景，使得整个系统呈电中性状态。我们证明，在该模型的非常普遍条件下，超流性可能会出现，这为一些基于两个电子形成玻色子束缚态而产生的超导理论提供了支持。",
            links: {
                pdf: "https://ui.adsabs.harvard.edu/abs/1993CoTPh..19...43L/abstract",
                arxiv: null,
                code: null
            }
        },
        {
            id: 215,
            title: "InvDesFlow-AL: active learning-based workflow for inverse design of functional materials",
            authors: "Xiao-Qi Han, Peng-Jie Guo, Ze-Feng Gao, Hao Sun, Zhong-Yi Lu",
            year: "2025",
            journal: "npj Computational Materials",
            volume: "11(1), 364 (2025)",
            category: "npj",
            abstract: "本工作提出了基于主动学习的逆向材料设计框架 InvDesFlow-AL，可迭代优化生成过程并逐步引导材料向目标性能收敛。该模型在晶体结构预测中将RMSE降低至0.0423 Å，性能较现有模型提升32.96%，并成功用于低形成能材料搜索，获得超159万种Ehull < 50 meV的热稳定材料。进一步应用于常压BCS超导材料设计时，InvDesFlow-AL发现了Tc高达140 K的Li<sub>2</sub>AuH<sub>6</sub>及多种高Tc材料，展示了逆向设计在材料发现中的强大能力。",
            links: {
                pdf: "https://doi.org/10.1038/s41524-025-01830-z",
                arxiv: null,
                code: null
            },
            badges: ["highlight"]
        },
        {
            id: 216,
            title: "InvDesFlow: An AI-Driven Materials Inverse Design Workflow to Explore Possible High-Temperature Superconductors",
            authors: "Xiao-Qi Han, Zhenfeng Ouyang, Peng-Jie Guo, Hao Sun, Ze-Feng Gao, Zhong-Yi Lu",
            year: "2025",
            journal: "Chinese Physics Letters",
            volume: "42(4), 047301 (2025)",
            category: "cpl",
            abstract: "本工作提出了AI驱动的逆向材料设计流程 InvDesFlow，将深度模型预训练与微调、扩散模型及基于物理的方法集成，用于高Tc超导材料的发现。模型成功获得74种热力学稳定且Tc ≥ 15 K的材料，这些材料全部不在任何已有数据库中，并系统分析了如B<sub>4</sub>CN<sub>3</sub>与B<sub>5</sub>CN<sub>2</sub>等代表性材料的超导特性。结果表明AI技术能够显著加速高Tc超导材料的发现。",
            links: {
                pdf: "http://cpl.iphy.ac.cn/en/article/doi/10.1088/0256-307X/42/4/047301",
                arxiv: null,
                code: null
            },
            badges: ["highlight"]
        },
        {
            id: 217,
            title: "HTSC-2025: A benchmark dataset of ambient-pressure high-temperature superconductors for AI-driven critical temperature prediction",
            authors: "Xiao-Qi Han(韩小琪), Ze-Feng Gao(高泽峰), Xin-De Wang(王馨德), Zhenfeng Ouyang(欧阳振峰), Peng-Jie Guo(郭朋杰), Zhong-Yi Lu(卢仲毅)",
            year: "2025",
            journal: "Chinese Physics B",
            volume: "34(10), 100301 (2025)",
            category: "cpb",
            abstract: "本工作构建了常压高温超导材料基准数据集 HTSC-2025，涵盖2023–2025年基于BCS理论预测的多类高温超导材料，包括多种氢化物、BCN 掺杂体系及类 MgB<sub>2</sub> 蜂窝材料。该数据集填补了领域内缺乏统一基准的空白，有助于公平评估AI预测模型并推动超导材料研究发展。",
            links: {
                pdf: "https://cpb.iphy.ac.cn/EN/abstract/article_127930.shtml",
                arxiv: null,
                code: null
            },
            badges: ["highlight"]
        }
        // 在这里添加更多论文...
    ];

    // ==============================
    // 2. 常量和配置
    // ==============================
    const journalMap = {
        'prl': { name: 'Physical Review Letters', icon: 'fas fa-star', color: '#e74c3c' },
        'prb': { name: 'Physical Review B', icon: 'fas fa-book', color: '#2980b9' },
        'prx': { name: 'Physical Review X', icon: 'fas fa-atom', color: '#27ae60' },
        'nat-phys': { name: 'Nature Physics', icon: 'fas fa-globe-europe', color: '#8e44ad' },
        'npj': { name: 'npj Computational Materials', icon: 'fas fa-cubes', color: '#16a085' },
        'nl': { name: 'Nano Letters', icon: 'fas fa-vial', color: '#f1c40f' },
        'sci-bull': { name: 'Science Bulletin', icon: 'fas fa-bullhorn', color: '#e67e22' },
        'jpcc': { name: 'Journal of Physical Chemistry C', icon: 'fas fa-flask', color: '#d35400' },
        'jpc': { name: 'Journal of Physics: Condensed Matter', icon: 'fas fa-flask', color: '#3dcc20ff' },
        'mat-fut': { name: 'Materials Futures', icon: 'fas fa-layer-group', color: '#c0392b' },
        'scpma': { name: 'Science China Phys ics, Mechanics & Astronomy', icon: 'fas fa-rocket', color: '#2ecc71' },
        'prr': { name: 'Physical Review Research', icon: 'fas fa-search', color: '#e17055' },
        'prm': { name: 'Physical Review Materials', icon: 'fas fa-cube', color: '#00b894' },
        'nanoscale': { name: 'Nanoscale', icon: 'fas fa-microchip', color: '#fdcb6e' },
        'carbon': { name: 'Carbon', icon: 'fas fa-circle', color: '#636e72' },
        'nature': { name: 'Nature', icon: 'fas fa-leaf', color: '#00b894' },
        'ape': { name: 'Applied Physics Express', icon: 'fas fa-bolt', color: '#d35400' },
        'nsr': { name: 'National Science Review', icon: 'fas fa-book-open', color: '#0984e3' },
        'nat-comm': { name: 'Nature Communications', icon: 'fas fa-comments', color: '#fd79a8' },
        'sr': { name: 'Scientific Reports', icon: 'fas fa-file-alt', color: '#6c5ce7' },
        'cpb': { name: 'Chinese Physics B', icon: 'fas fa-pen-nib', color: '#e17055' },
        'Advanced Materials':{name:'Advanced Materials', icon: 'fas fa-thumbs-up', color: '#0984e3'},
        'Surface Review and Letters': {name: 'Surface Review and Letters', icon: 'fas fa-ruler-combined', color: '#e84393'},
        'cpl': { name: 'Chinese Physics Letters', icon: 'fas fa-mail-bulk', color: '#00b894' },
        'cpc': { name: 'Computer Physics Communications', icon: 'fas fa-network-wired', color: '#0984e3' },
        'Journal of Korean Physical Society': {name: 'Journal of Korean Physical Society', icon: 'fas fa-flag', color: '#fd79a8'},
        'Acta Physica Sinica': {name: 'Acta Physica Sinica', icon: 'fas fa-balance-scale', color: '#6ab04c'},
        'Il Nuovo Cimento D': {name: 'Il Nuovo Cimento D', icon: 'fas fa-dna', color: '#4834d4'},
        'Journal of Physics: Condensed Matter': {name: 'Journal of Physics: Condensed Matter', icon: 'fas fa-thermometer-half', color: '#f9ca24'},
        'cms': {name: 'Computational Materials Science', icon: 'fas fa-database', color: '#00b894'},
        'Journal of Physics and Chemistry of Solids': {name: 'Journal of Physics and Chemistry of Solids', icon: 'fas fa-gem', color: '#fdcb6e'},
        'epl': {name: 'epl', icon: 'fas fa-lightbulb', color: '#00b894'},
        'ctp': {name: 'Communications in Theoretical Physics', icon: 'fas fa-comments', color: '#e17055'},
        'jcp': {name: 'Journal of Chemical Physics', icon: 'fas fa-vials', color: '#6c5ce7'},
        'jacs': {name: 'jacs', icon: 'fas fa-atom', color: '#fd79a8'},
        'npj Quantum Materials': {name: 'npj Quantum Materials', icon: 'fas fa-microscope', color: '#0984e3'},
        'IEEE-ACM Transactions on Audio, Speech, and Language Processing': {name: 'IEEE-ACM Transactions on Audio, Speech, and Language Processing', icon: 'fas fa-headphones', color: '#00b894'},
        'Frontiers of Physics in China': {name: 'Frontiers of Physics in China', icon: 'fas fa-archway', color: '#00b894'},
        'apl': {name: 'apl', icon: 'fas fa-magnet', color: '#e17055'},
        'surf. sci.': {name: 'Surface Science', icon: 'fas fa-water', color: '#00b894'},
        'Interface Science': {name: 'Interface Science', icon: 'fas fa-project-diagram', color: '#fdcb6e'},
        'IEEE Transactions on Nuclear Science': {name: 'IEEE Transactions on Nuclear Science', icon: 'fas fa-radiation', color: '#636e72'},
        'Superconductor Science and Technology': {name: 'Superconductor Science and Technology', icon: 'fas fa-bolt', color: '#e17055'},
        'other': { name: '其他期刊', icon: 'fas fa-question', color: '#b2bec3' }
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
        // Highlight Paper 筛选checkbox
        const highlightFilter = document.getElementById('highlightFilter');
    
    // 翻页元素
    const pagination = document.getElementById('pagination');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    
    // 统计元素
    const totalPapersEl = document.getElementById('totalPapers');
    const prlPapersEl = document.getElementById('prlPapers');
    const currentYearPapersEl = document.getElementById('currentYearPapers');
    const recentFiveYearsPapersEl = document.getElementById('recentFiveYearsPapers');

    // ==============================
    // 4. 状态管理
    // ==============================
    let currentFilters = {
        search: '',
        year: 'all',
        journal: 'all',
        tag: 'all',
        highlight: false
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
                // Highlight Paper 筛选checkbox
                if (highlightFilter) {
                    highlightFilter.addEventListener('change', function() {
                        currentFilters.highlight = this.checked;
                        currentPage = 1;
                        renderPublications();
                    });
                }
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
        const prlPrxCount = publications.filter(p => p.category === 'prl' || p.category === 'prx'|| p.category === 'nature').length;
        prlPapersEl.textContent = prlPrxCount;

        // 今年发表论文数
        const thisYear = new Date().getFullYear();
        const thisYearCount = publications.filter(p => parseInt(p.year) === thisYear).length;
        currentYearPapersEl.textContent = thisYearCount;

        // 近五年发表论文数
        const fiveYearsAgo = thisYear - 4;
        const fiveYearsCount = publications.filter(p => parseInt(p.year) >= fiveYearsAgo).length;
        recentFiveYearsPapersEl.textContent = fiveYearsCount;
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
            // Highlight Paper筛选
            if (currentFilters.highlight && (!pub.badges || !pub.badges.includes('highlight'))) {
                return false;
            }
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
                    ${pub.badges && pub.badges.includes('highlight') ? `<span class="card-badge badge-highlight" style="margin-left:10px;"><i class="fas fa-star"></i> Highlight Paper</span>` : ''}
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