const publications = [
  {type:"journal", title:"Improved Short Channel Characteristics with Long Data Retention Time in Extremely Short Channel NAND Flash Device", meta:"Deepika Gupta and S. K. Vishvakarma · IEEE Transactions on Electron Devices, Vol. 63, No. 2, pp. 668–674, Feb. 2016"},
  {type:"journal", title:"Impact of LDD depth Variation on the performance characteristics of SONOS NAND Flash Memory Device", meta:"Deepika Gupta and S. K. Vishvakarma · IEEE Transactions on Device and Material Reliability, Vol. 16, No. 3, pp. 298–303, June 2016"},
  {type:"journal", title:"Improvement of Short Channel Performance of Junction-free Charge Trapping 3-D NAND Flash Memory", meta:"Deepika Gupta and S. K. Vishvakarma · IET Micro & Nano Letters, Vol. 12, No. 1, pp. 64–68, Dec. 2016"},
  {type:"journal", title:"Role of Through Silicon Via in 3D Integration: Impact on Delay and Power", meta:"S. Chandrakar, Deepika Gupta, and M. K. Majumder · Journal of Circuits, Systems and Computers, World Scientific, 2021 · DOI: 10.1142/S0218126621500511", link:"https://doi.org/10.1142/S0218126621500511"},
  {type:"journal", title:"Effect of Spacer Dielectric on the Program Disturb of 3-D Junction-Free NAND Flash Memory", meta:"Deepika Gupta and S. K. Vishvakarma · Journal of Nanoelectronics and Optoelectronics, Vol. 14, pp. 1–6, 2019"},
  {type:"journal", title:"Investigation of BE-SONOS Flash Memory along with Metal Gate and High-k Dielectrics Tunnel Barrier and its Impact in Charge Retention Dynamics", meta:"S. Jain, Deepika Gupta, S. K. Vishvakarma and V. Neema · Journal of Semiconductors, Vol. 37, No. 3, Jan. 2016"},
  {type:"journal", title:"Investigation of BESONOS Flash Memory with High-k Dielectrics in Tunnel Barrier and its Impact on Charge Retention Dynamics", meta:"S. Jain, V. Neema, Deepika Gupta, S. K. Vishvakarma · Journal of Nanoelectronics and Optoelectronics, Vol. 11, No. 6, pp. 663–668, Dec. 2016"},
  {type:"journal", title:"Analysis of Modified Feed-Through Logic with Improved Power Delay Product", meta:"Deepika Gupta, N. Tiwari, R. K. Sarin · International Journal of Computer Application, Vol. 69, No. 5, pp. 5–8, May 2013"},
  {type:"journal", title:"Improvement in Electrical Characteristics of BE-SONOS Using High-k Dielectrics in Tunneling Barrier", meta:"V. Neema, M. Kaur, Deepika Gupta, S. K. Vishvakarma, A. Dutt and A. Beohar · Transaction on Electrical and Electronic Material, March 2021", link:"https://doi.org/10.1007/s42341-021-00307-2"},
  {type:"journal", title:"Performance Analysis of IoT-Based Overlay Satellite-Terrestrial Networks Under Interference", meta:"P. K. Sharma, B. Yogesh, Deepika Gupta and D. I. Kim · IEEE Transactions on Cognitive Communications and Networking, Vol. 7, No. 3, pp. 985–1001, Sept. 2021", link:"https://doi.org/10.1109/TCCN.2021.305250"},
  {type:"journal", title:"Outage performance of 3D mobile UAV caching for hybrid satellite-terrestrial networks", meta:"P. K. Sharma, Deepika Gupta, and D. I. Kim · IEEE Transactions on Vehicular Technology, June 2021", link:"https://doi.org/10.1109/TVT.2021.3089742"},
  {type:"journal", title:"Outage performance of multi-UAV relaying-based imperfect hardware hybrid satellite-terrestrial networks", meta:"P. K. Sharma and Deepika Gupta · IEEE Systems Journal, Vol. 16, No. 2, June 2022"},
  {type:"journal", title:"Recent Development in Analytical Model for Graphene Field Effect Transistors for RF Circuit Applications", meta:"A. K. Upadhyay, A. K. Kushwaha, Deepika Gupta, S. K. Vishvakarma · Journal of Computational Electronics, Vol. 22, No. 1, Oct. 2022"},
  {type:"journal", title:"Performance Analysis of Bump in Tapered TSV: Impact on Crosstalk and Power Loss", meta:"S. Chandrakar, Deepika Gupta, M. K. Majumdar and B. K. Kaushik · IEEE Open Journal of Nanotechnology, Vol. 3, pp. 227–235, 2022", link:"https://doi.org/10.1109/OJNANO.2022.3221815"},
  {type:"journal", title:"Performance analysis of Cu/CNT-based TSV: impact on crosstalk and power", meta:"S. Chandrakar, Deepika Gupta & Manoj Majumder · Journal of Computational Electronics, Vol. 21, pp. 1262–1274, 2022", link:"https://doi.org/10.1007/s10825-022-01937-2"},
  {type:"journal", title:"Impact of TSV bump and redistribution layer on crosstalk delay and power loss", meta:"S. Chandrakar, Deepika Gupta, M. K. Majumder · Memories: Materials, Devices and Circuits, 2023", link:"https://doi.org/10.1016/j.memori.2023.100040"},
  {type:"journal", title:"Improvement of Short Channel Effects and Memory Performance of 3-D NAND Flash Memory", meta:"Deepika Gupta, A. Upadhaya, A. Beohar, S. K. Vishvakarma · Memories: Materials, Devices and Circuits, 2023", link:"https://doi.org/10.1016/j.memori.2023.100031"},
  {type:"journal", title:"Floating/Grounded Charge Control Memristor Emulator using DVCCTA", meta:"N. Bhuwal, M. K. Majumdar, Deepika Gupta · Journal of Computational Electronics, Vol. 23, pp. 899–909, 2024"},
  {type:"journal", title:"High-Frequency Electromagnetic Eddy Effect Modeling for Cylindrical and Tapered Bump", meta:"S. Chandrakar, Deepika Gupta, M. K. Majumder and B. K. Kaushik · IEEE Transactions on Electromagnetic Compatibility, Vol. 65, No. 6, pp. 1724–1733, Dec. 2023", link:"https://doi.org/10.1109/TEMC.2023.3307816"},
  {type:"journal", title:"Electrical Modeling and Performance Analysis of Cu and CNT Based TSV-Bump-RDL", meta:"S. Chandrakar, K. Solanki, Deepika Gupta and M. K. Majumder · IEEE Transactions on Nanotechnology, Vol. 23, pp. 448–455, 2024", link:"https://doi.org/10.1109/TNANO.2024.3408310"},
  {type:"journal", title:"Device–Circuit Co-Design of Field-Free VGSOT-MTJ for a Delay-Tunable Energy-Efficient Arbiter PUF", meta:"T. Kartheek, J. Aditya, Deepika Gupta · Journal of Magnetism and Magnetic Materials, Elsevier · Accepted"},
  {type:"journal", title:"A Cascaded Nonlinear VGSOT-MTJ-Based Arbiter Architecture for Variation-Aware VLSI Design", meta:"T. Kartheek, J. Aditya, Deepika Gupta · Integration, the VLSI Journal, Elsevier · Accepted"},
  {type:"conference", title:"A New Approach to Suppress GIDL in NAND Flash Memory", meta:"Deepika Gupta and S. K. Vishvakarma · 18th International Workshop on Physics of Semiconductor Devices (IWPSD), Bangalore, Dec. 2015"},
  {type:"conference", title:"Rare Earth Materials and LaON in Tunnel Barrier Engineering With Enhanced Memory Characteristics", meta:"M. Kaur, Deepika Gupta, V. Neema, S. K. Vishvakarma, V. Vijayvargiya · IEEE Prime Asia Conference, Hyderabad, Dec. 2015"},
  {type:"conference", title:"A Non-Volatile Memory MONOS Device for Improved Stability Applications", meta:"A. Gupta, H. Anwar, Deepika Gupta, V. Vijayvargiya and S. K. Vishvakarma · IEEE ICDCCom, Ranchi, Sept. 2014"},
  {type:"conference", title:"Internet of things-enabled overlay satellite-terrestrial networks in the presence of interference", meta:"P. K. Sharma, B. Yogesh, Deepika Gupta · National Conference on Communications (NCC 2020), IIT Kharagpur, Feb. 2020"},
  {type:"conference", title:"Cooperative AF-based 3D mobile UAV relaying for hybrid satellite-terrestrial networks", meta:"P. K. Sharma, Deepika Gupta, D. I. Kim · IEEE Vehicular Technology Conference 2020 (VTC 2020-Spring), Antwerp, May 2020"},
  {type:"conference", title:"A Reconfigurable Arbiter PUF based on VGSOT MTJ", meta:"K. Das, A. Japa, Deepika Gupta · IEEE VLSI Design and Test (VDAT 2022), IIT Jammu, July 2022"},
  {type:"conference", title:"Outage Performance of Hybrid Satellite-Aerial-Terrestrial Networks in the Presence of Interference", meta:"A. Verma, Deepika Gupta, P. K. Sharma · ACTS 2021, IEEE, NIT Rourkela, 2021", link:"https://doi.org/10.1109/ACTS53447.2021.9708132"},
  {type:"conference", title:"Traffic-Aware UAV Placement Strategies for Load Balancing in 5G Cellular Hotspots", meta:"B. Mahapatra, A. Verma, Deepika Gupta, P. K. Sharma, A. K. Turuk · ACTS 2021, IEEE, NIT Rourkela, 2021", link:"https://doi.org/10.1109/ACTS53447.2021.9708242"},
  {type:"conference", title:"Signal Integrity and Power Loss Analysis for different Bump Structures in Cylindrical TSV", meta:"S. Chandrakar, K. Das, Deepika Gupta, M. K. Majumdar · IEEE VDAT 2022, IIT Jammu, July 2022"},
  {type:"conference", title:"Crosstalk and Power Analysis in Tapered based Composite Cu-CNT TSV in 3D IC", meta:"S. Chandrakar, Deepika Gupta and M. K. Majumder · 2024 IEEE ISCAS, Singapore, 2024", link:"https://doi.org/10.1109/ISCAS58744.2024.10558624"},
  {type:"conference", title:"Implementation of Floating Charged Memristor Emulator using DVCCTA", meta:"N. Bhuwal, M. K. Majumdar, Deepika Gupta · 2024 IEEE ISCAS, Singapore, 2024", link:"https://doi.org/10.1109/ISCAS58744.2024.10558254"},
  {type:"conference", title:"Flux Controlled Grounded Meminductor Emulator using single DVCCTA", meta:"N. Bhuwal, K. Solanki, M. K. Majumdar, Deepika Gupta · 37th International Conference on VLSI Design and 23rd International Conference on Embedded System, Kolkata, 2024"},
  {type:"conference", title:"Meminductor Emulator via Flux Approach for Wide Frequency Range Applications", meta:"M. K. Khan, N. Bhuwal, S. Sagar and D. Gupta · 28th International Symposium on VLSI Design and Test (VDAT), Vellore, 2024", link:"https://doi.org/10.1109/VDAT63601.2024.10705673"},
  {type:"conference", title:"Design Insights and Performance Analysis of VGSOT-MTJ for Energy-Efficient Logic and Memory", meta:"K. Thampula, Samanwaya, A. Japa, D. Gupta · VLSI SATA, Bangalore, May 2025"},
  {type:"conference", title:"FPGA Implementation of Resource-Efficient Cube Calculation Architecture using Yavadunam Sutra", meta:"Mansi Shukla, Anand Singh Thakur, Rohit Chaurasiya and Deepika Gupta · VDAT-2023, BITS-Pilani, Sept. 2023 · In Press"},
  {type:"conference", title:"Modeling and Side-Channel Attack Resistant VGSOT-MTJ PUF Using ML and DL Analysis", meta:"Avani Gajallewar, Krishna Agrawal, Arpit Sinha, Deepika Gupta · IEEE GCON, IIT Guwahati, 3–5 June 2026"},
  {type:"conference", title:"Hardware Accelerator by Implementing Machine Learning Algorithms on FPGA", meta:"Ananya Rajawat, Palak Maheshwari, Deepika Gupta · 2nd International Conference on Emerging Trends in Microelectronics, Communication and Intelligent Systems, MIT Academy of Engineering Pune, 29–30 May 2026"},
  {type:"book", title:"Overlay Multi-user Satellite Terrestrial network for IoT in the presence of Interference", meta:"P. K. Sharma, B. Yogesh, Deepika Gupta · 5G and Beyond Wireless System, Springer, May 2020"},
  {type:"book", title:"Low-Voltage Analog Integrated Circuit Design", meta:"Gupta D. (2020) · In: Dhiman R., Chandel R. (eds) Nanoscale VLSI. Energy Systems in Electrical Engineering. Springer, Singapore", link:"https://doi.org/10.1007/978-981-15-7937-0_1"}
];

const list = document.getElementById("publication-list");
const filters = document.querySelectorAll(".filter");

function renderPublications(filter="all"){
  const items = publications.filter(p => filter==="all" || p.type===filter);
  list.innerHTML = items.map((p,i)=>`
    <article class="pub">
      <div class="pub-num">${String(i+1).padStart(2,"0")}</div>
      <div>
        <h3>${p.title}</h3>
        <p>${p.meta}${p.link ? ` · <a href="${p.link}" target="_blank" rel="noopener">DOI / Link ↗</a>` : ""}</p>
      </div>
    </article>
  `).join("");
}
filters.forEach(btn=>{
  btn.addEventListener("click",()=>{
    filters.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    renderPublications(btn.dataset.filter);
  });
});
renderPublications();

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.remove("open");
}));
document.getElementById("year").textContent = new Date().getFullYear();
