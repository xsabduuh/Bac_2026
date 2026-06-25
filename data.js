const STUDY_DATA = [
  {
    id: "cat-national",
    title: "الوطني",
    subjects: [
      {
        id: "subj-physics",
        title: "الفيزياء والكيمياء",
        units: [
          {
            id: "unit-phys-1",
            title: "فيزياء - الوحدة 1: التحولات النووية",
            lessons: [
              {
                id: "lesson-radioactivity",
                title: "النشاط الإشعاعي",
                branches: [
                  {
                    id: "branch-radioact-1",
                    title: "قوانين الإشعاع والانحلال",
                    partials: [
                      { id: "p-rad-1-1", title: "قوانين الانحلال الإشعاعي (ألفا، بيتا-، بيتا+، غاما)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rad-1-2", title: "قانون الإزاحة وقواعد الحفاظ", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rad-1-3", title: "قانون التناقص الإشعاعي N(t) = N₀·e^(-λt)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rad-1-4", title: "العمر النصفي t½ = ln2 / λ", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rad-1-5", title: "النشاط الإشعاعي A = λ·N", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-nuclear-reactions",
                title: "التفاعلات النووية",
                branches: [
                  {
                    id: "branch-nuclear-1",
                    title: "الانشطار والاندماج والطاقة النووية",
                    partials: [
                      { id: "p-nuc-1-1", title: "طاقة الربط النووي وعجز الكتلة Δm", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-nuc-1-2", title: "علاقة أينشتاين E = Δm·c²", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-nuc-1-3", title: "الانشطار النووي: تفاعل اليورانيوم، الطاقة المنطلقة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-nuc-1-4", title: "الاندماج النووي: شروطه وتطبيقاته", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-phys-2",
            title: "فيزياء - الوحدة 2: الكهرباء",
            lessons: [
              {
                id: "lesson-rc-circuit",
                title: "دوائر RC",
                branches: [
                  {
                    id: "branch-rc-1",
                    title: "شحن وتفريغ المكثفة",
                    partials: [
                      { id: "p-rc-1-1", title: "بنية المكثفة وسعتها C = Q/U", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rc-1-2", title: "معادلة الشحن uc(t) = E(1-e^(-t/τ))", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rc-1-3", title: "معادلة التفريغ uc(t) = U₀·e^(-t/τ)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rc-1-4", title: "ثابت الزمن τ = RC واستغلاله بيانياً", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rc-1-5", title: "الطاقة المخزنة في المكثفة Ec = ½CU²", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-rl-circuit",
                title: "دوائر RL",
                branches: [
                  {
                    id: "branch-rl-1",
                    title: "الملف والتحريض الذاتي",
                    partials: [
                      { id: "p-rl-1-1", title: "التحريض الذاتي والتدفق المغناطيسي Φ = L·i", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rl-1-2", title: "قانون لينز وتحريض الملف uL = L·(di/dt)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rl-1-3", title: "نمو التيار i(t) = (E/R)(1-e^(-t/τ))", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rl-1-4", title: "انخفاض التيار عند الفصل", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rl-1-5", title: "الطاقة المخزنة في الملف Em = ½Li²", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-rlc-circuit",
                title: "دوائر RLC",
                branches: [
                  {
                    id: "branch-rlc-1",
                    title: "التذبذبات الكهربائية الحرة والقسرية",
                    partials: [
                      { id: "p-rlc-1-1", title: "التذبذبات الحرة (غير مخمدة ومخمدة) في دارة RLC", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rlc-1-2", title: "معادلة التذبذب وشرط التذبذب الحر", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rlc-1-3", title: "الرنين في دارة RLC التسلسلية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-rlc-1-4", title: "القدرة الكهربائية في التيار المتردد", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-phys-3",
            title: "فيزياء - الوحدة 3: الميكانيكا",
            lessons: [
              {
                id: "lesson-newton",
                title: "قوانين نيوتن",
                branches: [
                  {
                    id: "branch-newton-1",
                    title: "قوانين الحركة",
                    partials: [
                      { id: "p-new-1-1", title: "القانون الأول (قصور الذات) والمرجع القصوري", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-new-1-2", title: "القانون الثاني ΣF = m·a وتطبيقاته", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-new-1-3", title: "القانون الثالث (التفاعل المتبادل)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-projectile",
                title: "حركة القذيفة",
                branches: [
                  {
                    id: "branch-proj-1",
                    title: "المعادلات الحركية والمسار",
                    partials: [
                      { id: "p-prj-1-1", title: "معادلات الحركة الأفقية والعمودية للقذيفة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-prj-1-2", title: "معادلة المسار المكافئ y = f(x)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-prj-1-3", title: "حساب المدى الأقصى وزاوية الإطلاق المثلى", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-circular",
                title: "الحركة الدائرية",
                branches: [
                  {
                    id: "branch-circ-1",
                    title: "الدوران المنتظم وغير المنتظم",
                    partials: [
                      { id: "p-cir-1-1", title: "السرعة الزاوية ω والسرعة الخطية v = ω·R", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-cir-1-2", title: "التسارع المركزي a = v²/R = ω²·R", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-cir-1-3", title: "قوة الجذب المركزي وتطبيقاتها (حركة الأقمار الصناعية)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-oscillation",
                title: "التذبذبات الميكانيكية",
                branches: [
                  {
                    id: "branch-osc-1",
                    title: "نظام الكتلة-الزنبرك والبندول",
                    partials: [
                      { id: "p-osc-1-1", title: "نظام الكتلة-زنبرك: معادلة الحركة، الحل التذبذبي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-osc-1-2", title: "الدور التذبذبي T = 2π√(m/k)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-osc-1-3", title: "البندول البسيط T = 2π√(l/g)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-osc-1-4", title: "الطاقة الميكانيكية في التذبذب (كمون + حركي)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-osc-1-5", title: "التذبذب المخمد والرنين الميكانيكي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-phys-4",
            title: "فيزياء - الوحدة 4: الضوء والموجات",
            lessons: [
              {
                id: "lesson-waves",
                title: "الموجات",
                branches: [
                  {
                    id: "branch-waves-1",
                    title: "خصائص الموجات",
                    partials: [
                      { id: "p-wav-1-1", title: "الموجات الميكانيكية المستعرضة والطولية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-wav-1-2", title: "العلاقة v = λ·f وتطبيقاتها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-wav-1-3", title: "ظاهرة دوبلر (تطبيق في الطب والفلك)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-light",
                title: "الضوء",
                branches: [
                  {
                    id: "branch-light-1",
                    title: "الانكسار وتشتت الضوء",
                    partials: [
                      { id: "p-lig-1-1", title: "قانون سنيل-ديكارت للانكسار n₁sinθ₁ = n₂sinθ₂", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-lig-1-2", title: "الانعكاس الكلي الداخلي والزاوية الحدية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-lig-1-3", title: "تشتت الضوء الأبيض (المنشور، الطيف الضوئي)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "subj-chem",
        title: "الكيمياء",
        units: [
          {
            id: "unit-chem-1",
            title: "كيمياء - الوحدة 1: التحولات الكيميائية السريعة والبطيئة",
            lessons: [
              {
                id: "lesson-chem-1-1",
                title: "سرعة التفاعل الكيميائي",
                branches: [
                  {
                    id: "branch-chem-speed-1",
                    title: "العوامل المؤثرة في سرعة التفاعل",
                    partials: [
                      { id: "p-chsp-1-1", title: "تعريف سرعة التفاعل وقياسها بدلالة التراكيز v = Δ[X]/Δt", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-chsp-1-2", title: "العوامل المؤثرة: التركيز، درجة الحرارة، الحفاز", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-chsp-1-3", title: "منحنى التقدم x(t) وجدول التقدم", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-chem-2",
            title: "كيمياء - الوحدة 2: التوازنات الكيميائية",
            lessons: [
              {
                id: "lesson-chem-2-1",
                title: "التوازن الكيميائي",
                branches: [
                  {
                    id: "branch-chem-eq-1",
                    title: "ثابت التوازن ومبدأ لو شاتلييه",
                    partials: [
                      { id: "p-ch2-1-1", title: "مفهوم التوازن الديناميكي (السرعة المباشرة تساوي العكسية)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ch2-1-2", title: "خارج التفاعل Qr وتعبيره بدلالة التراكيز", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ch2-1-3", title: "ثابت التوازن K وعلاقته بـ Qr عند التوازن", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ch2-1-4", title: "مبدأ لو شاتلييه (تأثير التركيز، درجة الحرارة، الضغط)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ch2-1-5", title: "معدل تقدم التفاعل، التقدم الأقصى", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-chem-3",
            title: "كيمياء - الوحدة 3: التفاعلات الحمضية القاعدية",
            lessons: [
              {
                id: "lesson-chem-3-1",
                title: "مفهوم الـ pH",
                branches: [
                  {
                    id: "branch-ph-1",
                    title: "الأحماض والقواعد والـ pH",
                    partials: [
                      { id: "p-ph-1-1", title: "تعريف الـ pH والعلاقة pH = -log[H₃O⁺]", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ph-1-2", title: "الأحماض والقواعد القوية (التفكك الكلي)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ph-1-3", title: "الأحماض والقواعد الضعيفة – ثابت الحموضة Ka و pKa", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ph-1-4", title: "تصنيف أزواج حمض/قاعدة حسب قوتها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-chem-3-2",
                title: "المعايرة الحمضية القاعدية",
                branches: [
                  {
                    id: "branch-titration-1",
                    title: "مبدأ المعايرة ومنحنياتها",
                    partials: [
                      { id: "p-tit-1-1", title: "مبدأ المعايرة (التفاعل الحمضي-قاعدي تام وسريع)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-tit-1-2", title: "نقطة التكافؤ وعلاقتها بحجم المضاف", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-tit-1-3", title: "منحنيات المعايرة (pH بدلالة الحجم) واستغلالها لتحديد التركيز", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-tit-1-4", title: "الكواشف الملونة واختيارها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-tit-1-5", title: "مخطط الهيمنة للأزواج حمض/قاعدة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-chem-4",
            title: "كيمياء - الوحدة 4: التحولات الكهربائية في الكيمياء",
            lessons: [
              {
                id: "lesson-electro-1",
                title: "الخلايا الكهروكيميائية والأعمدة",
                branches: [
                  {
                    id: "branch-electro-1-1",
                    title: "مبادئ الكهروكيمياء",
                    partials: [
                      { id: "p-elec-1-1", title: "تعريف الخلية الكهروكيميائية (الأنود، الكاثود)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-elec-1-2", title: "الجسر الملحي ودوره", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-elec-1-3", title: "القوة المحركة الكهربائية للعمود", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-elec-1-4", title: "العلاقة بين ثابت التوازن والقوة المحركة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-electro-2",
                title: "التحليل الكهربائي",
                branches: [
                  {
                    id: "branch-electrolysis-1",
                    title: "قانون فرداي والتحليل الكهربائي",
                    partials: [
                      { id: "p-elys-1-1", title: "الفرق بين العمود والمحلل الكهربائي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-elys-1-2", title: "التفاعلات الإجبارية عند المساريين", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-elys-1-3", title: "كمية الكهرباء Q = I × t", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-elys-1-4", title: "تطبيق قانون فرداي لتحديد كتلة المادة المترسبة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-chem-5",
            title: "كيمياء - الوحدة 5: الأسترة والحلمأة",
            lessons: [
              {
                id: "lesson-ester-1",
                title: "تفاعل الأسترة",
                branches: [
                  {
                    id: "branch-ester-1-1",
                    title: "الأسترة وخصائصها",
                    partials: [
                      { id: "p-est-1-1", title: "معادلة الأسترة بين حمض كربوكسيلي وكحول", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-est-1-2", title: "خصائص التفاعل (بطيء، محدود، لا حراري)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-est-1-3", title: "دور الحفاز (أيونات الهيدروجين) والتسخين المرتد", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-ester-2",
                title: "تفاعل الحلمأة",
                branches: [
                  {
                    id: "branch-hydrolysis-1",
                    title: "الحلمأة والمردود الكيميائي",
                    partials: [
                      { id: "p-hyd-1-1", title: "معادلة الحلمأة (عكس الأسترة)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-hyd-1-2", title: "المردود الكيميائي والعوامل المؤثرة فيه", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "subj-maths",
        title: "الرياضيات",
        units: [
          {
            id: "unit-maths-analysis",
            title: "التحليل",
            lessons: [
              {
                id: "lesson-limits",
                title: "النهايات",
                branches: [
                  {
                    id: "branch-limits-1",
                    title: "أنواع النهايات",
                    partials: [
                      { id: "p-lim-1-1", title: "النهايات المنتهية والغير منتهية عند نقطة وعند ∞", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-lim-1-2", title: "العمليات على النهايات والصور غير المحددة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-lim-1-3", title: "المقارنة والتأطير (نظرية الدرك)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-lim-1-4", title: "الفروع اللانهائية (المقاربات الأفقية والعمودية والمائلة)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-derivative",
                title: "الاشتقاق",
                branches: [
                  {
                    id: "branch-deriv-1",
                    title: "مفهوم الاشتقاق وقواعده",
                    partials: [
                      { id: "p-der-1-1", title: "العدد المشتق، الدالة المشتقة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-der-1-2", title: "قواعد الاشتقاق (المجموع، الجداء، الخارج، الدوال المركبة)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-der-1-3", title: "الاشتقاق من الرتبة الثانية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-der-1-4", title: "مبرهنة رول، مبرهنة التزايدات المنتهية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-functions",
                title: "دراسة الدوال",
                branches: [
                  {
                    id: "branch-func-1",
                    title: "خصائص الدوال",
                    partials: [
                      { id: "p-fn-1-1", title: "اتجاه تغير دالة (رتابتها)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-fn-1-2", title: "النقط الحرجة والنقط الحدية (القصوى المحلية)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-fn-1-3", title: "التقعر ونقط الانعطاف", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-fn-1-4", title: "دراسة دوال مرجعية: كثيرات الحدود، الجذرية، الأسية، اللوغاريتمية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-integral",
                title: "التكامل",
                branches: [
                  {
                    id: "branch-integ-1",
                    title: "مفهوم التكامل وتطبيقاته",
                    partials: [
                      { id: "p-int-1-1", title: "تكامل دالة متصلة، خصائص التكامل", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-int-1-2", title: "العلاقة بين التكامل والمساحة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-int-1-3", title: "القيمة المتوسطة لدالة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-int-1-4", title: "حساب التكامل باستعمال الدوال الأصلية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-integral-parts",
                title: "التكامل بالتجزئة",
                branches: [
                  {
                    id: "branch-intparts-1",
                    title: "صيغة التكامل بالتجزئة",
                    partials: [
                      { id: "p-itp-1-1", title: "صيغة التكامل بالتجزئة وتطبيقاتها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-sequences",
                title: "المتتاليات العددية",
                branches: [
                  {
                    id: "branch-seq-1",
                    title: "أنواع المتتاليات ودراستها",
                    partials: [
                      { id: "p-seq-1-1", title: "المتتاليات الحسابية والهندسية (الأساس، الحد العام، المجموع)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-seq-1-2", title: "دراسة تقارب متتالية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-seq-1-3", title: "المتتاليات الرتيبة والمحدودة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-seq-1-4", title: "المتتاليات التراجعية u_{n+1} = f(u_n)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-diffeq",
                title: "المعادلات التفاضلية",
                branches: [
                  {
                    id: "branch-diffeq-1",
                    title: "أنواع المعادلات التفاضلية",
                    partials: [
                      { id: "p-deq-1-1", title: "المعادلة y' = a y وحلولها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-deq-1-2", title: "المعادلة y' = a y + b", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-deq-1-3", title: "المعادلة y'' + ω² y = 0 وحلولها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-maths-algebra",
            title: "الجبر والهندسة",
            lessons: [
              {
                id: "lesson-complex",
                title: "الأعداد العقدية",
                branches: [
                  {
                    id: "branch-complex-1",
                    title: "أشكال الأعداد العقدية",
                    partials: [
                      { id: "p-cx-1-1", title: "الشكل الجبري z = x + iy، الجزء الحقيقي والتخيلي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-cx-1-2", title: "مرافق عدد عقدي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-cx-1-3", title: "الشكل المثلثي z = |z|(cosθ + i sinθ)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-cx-1-4", title: "الشكل الأسي: z = |z| e^{iθ}", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-cx-1-5", title: "صيغتا أويلر وموافر", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-cx-1-6", title: "حل المعادلات من الدرجة الثانية في ℂ", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-cx-1-7", title: "التمثيل الهندسي للأعداد العقدية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-3dgeom",
                title: "الهندسة الفضائية",
                branches: [
                  {
                    id: "branch-3dgeom-1",
                    title: "معادلات الأشكال الهندسية الفضائية",
                    partials: [
                      { id: "p-3dg-1-1", title: "معادلة ديكارتية ومتجهية لمستقيم", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-3dg-1-2", title: "معادلة ديكارتية لمستوى", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-3dg-1-3", title: "تقاطع مستقيم ومستوى، تقاطع مستويين", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-3dg-1-4", title: "معادلة كرة، المماس", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-3dg-1-5", title: "المسافة بين نقطة ومستوى", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-vectors",
                title: "الجداء السلمي والجداء المتجهي",
                branches: [
                  {
                    id: "branch-vectors-1",
                    title: "الجداءات المتجهية وتطبيقاتها",
                    partials: [
                      { id: "p-vec-1-1", title: "تعريف الجداء السلمي وخصائصه في الفضاء", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-vec-1-2", title: "تطبيقات الجداء السلمي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-vec-1-3", title: "الجداء المتجهي: تعريفه، خصائصه، حسابه", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-vec-1-4", title: "تطبيقات (مساحة مثلث، حجم رباعي وجوه)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-proba",
                title: "الاحتمالات",
                branches: [
                  {
                    id: "branch-proba-1",
                    title: "الاحتمالات والمتغير العشوائي",
                    partials: [
                      { id: "p-prb-1-1", title: "الاحتمال الشرطي (تعريفه، شجرة الاحتمالات)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-prb-1-2", title: "صيغة الاحتمالات الكلية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-prb-1-3", title: "استقلال حدثين", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-prb-1-4", title: "المتغير العشوائي: قانون الاحتمال، الأمل الرياضي، التباين", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-prb-1-5", title: "قانون الحداني (بينوميال)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "subj-svt",
        title: "علوم الحياة والأرض",
        units: [
          {
            id: "unit-svt-1",
            title: "الوحدة 1: استهلاك المادة العضوية والطاقة",
            lessons: [
              {
                id: "lesson-respiration",
                title: "التنفس الخلوي",
                branches: [
                  {
                    id: "branch-resp-1",
                    title: "مراحل التنفس الخلوي",
                    partials: [
                      { id: "p-res-1-1", title: "المقر العام (الميتوكندري)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-res-1-2", title: "مراحل التنفس: انحلال السكر، دورة كريبس، الفسفرة التأكسدية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-res-1-3", title: "حصيلة الطاقة: دور ATP كوسيط طاقي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-fermentation",
                title: "التخمر",
                branches: [
                  {
                    id: "branch-ferm-1",
                    title: "أنواع التخمر ومقارنتها",
                    partials: [
                      { id: "p-fer-1-1", title: "التخمر الكحولي والتخمر اللبني", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-fer-1-2", title: "مقارنة التخمر والتنفس من حيث المردود الطاقي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-muscle",
                title: "آلية التقلص العضلي",
                branches: [
                  {
                    id: "branch-muscle-1",
                    title: "بنية الليف العضلي وآلية التقلص",
                    partials: [
                      { id: "p-mus-1-1", title: "بنية الليف العضلي (الأكتين والميوزين)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-mus-1-2", title: "دور ATP وأيونات الكالسيوم في الانزلاق الخيطي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-mus-1-3", title: "مراحل التقلص العضلي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-svt-2",
            title: "الوحدة 2: إنتاج المادة العضوية",
            lessons: [
              {
                id: "lesson-photosynthesis",
                title: "التركيب الضوئي",
                branches: [
                  {
                    id: "branch-photo-1",
                    title: "مراحل التركيب الضوئي",
                    partials: [
                      { id: "p-pht-1-1", title: "المرحلة الضوئية: التحليل الضوئي للماء، إنتاج ATP و NADPH", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-pht-1-2", title: "دورة كالفن: ثبيت CO₂ وإنتاج الجلوكوز", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-pht-1-3", title: "العوامل المؤثرة في التركيب الضوئي (الضوء، CO₂، الحرارة)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-svt-3",
            title: "الوحدة 3: الوراثة",
            lessons: [
              {
                id: "lesson-genetics",
                title: "الوراثة",
                branches: [
                  {
                    id: "branch-gen-1",
                    title: "المندلية وتركيب DNA والهندسة الوراثية",
                    partials: [
                      { id: "p-gen-1-1", title: "تجارب مندل وقوانينه (الانعزال، التحرر)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-gen-1-2", title: "تركيب DNA والتضاعف", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-gen-1-3", title: "الطفرات والهندسة الوراثية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-svt-4",
            title: "الوحدة 4: المناعة والبيئة",
            lessons: [
              {
                id: "lesson-immunity",
                title: "المناعة",
                branches: [
                  {
                    id: "branch-imm-1",
                    title: "آليات الدفاع المناعي",
                    partials: [
                      { id: "p-imm-1-1", title: "المناعة غير النوعية (الحواجز الطبيعية، الالتهاب)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-imm-1-2", title: "المناعة النوعية الخلطية (الأجسام المضادة)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-imm-1-3", title: "المناعة النوعية الخلوية (اللمفاويات T)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-imm-1-4", title: "اضطرابات المناعة (الحساسية، الأمراض المناعية الذاتية، نقص المناعة)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-env",
                title: "البيئة والتنوع البيولوجي",
                branches: [
                  {
                    id: "branch-env-1",
                    title: "النظام البيئي والتنوع البيولوجي",
                    partials: [
                      { id: "p-env-svt-1", title: "مكونات النظام البيئي (حيوية وغير حيوية)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-env-svt-2", title: "الشبكات الغذائية ودورات المادة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-env-svt-3", title: "تأثير الإنسان على البيئة والتنوع البيولوجي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-energy-env",
                title: "الطاقة والبيئة",
                branches: [
                  {
                    id: "branch-energy-alt",
                    title: "مصادر الطاقة البديلة",
                    partials: [
                      { id: "p-alt-1-1", title: "الطاقة الشمسية، طاقة الرياح، الطاقة الكهرمائية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-alt-1-2", title: "مميزاتها وحدودها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-envmonitor",
                title: "المراقبة البيئية",
                branches: [
                  {
                    id: "branch-envmon-1",
                    title: "مؤشرات التلوث والمحميات",
                    partials: [
                      { id: "p-env-1-1", title: "مؤشرات التلوث ودور المحميات", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-svt-5",
            title: "الوحدة 5: الجيولوجيا",
            lessons: [
              {
                id: "lesson-tectonics",
                title: "تكتونية الصفائح",
                branches: [
                  {
                    id: "branch-tect-1",
                    title: "نظرية الصفائح",
                    partials: [
                      { id: "p-tec-1-1", title: "نظرية زحزحة القارات (فاغنر) ودلائلها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-tec-1-2", title: "البنية الداخلية للأرض وعلاقتها بالصفائح", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-tec-1-3", title: "حدود الصفائح (المتباعدة، المتقاربة، المنزلقة)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-mountains",
                title: "تشكل السلاسل الجبلية",
                branches: [
                  {
                    id: "branch-mount-1",
                    title: "عمليات تشكل الجبال",
                    partials: [
                      { id: "p-mnt-1-1", title: "التصادم القاري ونشوء جبال الهيمالايا", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-mnt-1-2", title: "الطمر وذوبان القشرة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-geophen",
                title: "الظواهر الجيولوجية المرتبطة",
                branches: [
                  {
                    id: "branch-geophen-1",
                    title: "الزلازل والبراكين",
                    partials: [
                      { id: "p-geo-1-1", title: "الزلازل: أنواع الموجات الزلزالية، قياس قوتها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-geo-1-2", title: "البراكين: أنواعها وعلاقتها بالصفائح", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "subj-philo",
        title: "الفلسفة",
        units: [
          {
            id: "unit-philo-1",
            title: "الوحدة 1: الشخص",
            lessons: [
              {
                id: "lesson-person",
                title: "الشخص",
                branches: [
                  {
                    id: "branch-person-1",
                    title: "هوية الشخص وقيمته",
                    partials: [
                      { id: "p-per-1-1", title: "هوية الشخص", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-per-1-2", title: "قيمة الشخص", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-per-1-3", title: "الحرية والضرورة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-philo-2",
            title: "الوحدة 2: الغير",
            lessons: [
              {
                id: "lesson-other",
                title: "الغير",
                branches: [
                  {
                    id: "branch-other-1",
                    title: "معرفة الغير والعلاقة معه",
                    partials: [
                      { id: "p-oth-1-1", title: "معرفة الغير", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-oth-1-2", title: "العلاقة مع الغير (الصداقة، الصراع)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-philo-3",
            title: "الوحدة 3: المعرفة",
            lessons: [
              {
                id: "lesson-knowledge",
                title: "المعرفة",
                branches: [
                  {
                    id: "branch-know-1",
                    title: "أسس المعرفة",
                    partials: [
                      { id: "p-kn-1-1", title: "التجربة والتجريب", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-kn-1-2", title: "العقلانية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-kn-1-3", title: "الحقيقة ومعاييرها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-philo-4",
            title: "الوحدة 4: السياسة",
            lessons: [
              {
                id: "lesson-politics",
                title: "السياسة",
                branches: [
                  {
                    id: "branch-pol-1",
                    title: "الدولة والسلطة والحق",
                    partials: [
                      { id: "p-plt-1-1", title: "الدولة ونشأتها (العقد الاجتماعي)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-plt-1-2", title: "السلطة والسلطة الشرعية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-plt-1-3", title: "الحق والعنف (العدالة والعنف المشروع)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "subj-english",
        title: "اللغة الإنجليزية",
        units: [
          {
            id: "unit-eng-1",
            title: "الوحدات 1-10",
            lessons: [
              {
                id: "lesson-eng-1",
                title: "Unit 1: Education",
                branches: [
                  {
                    id: "branch-eng-1-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-1-1", title: "Reading: types of education", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-1-2", title: "Grammar: tenses", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-1-3", title: "Functions: expressing opinion", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-1-4", title: "Writing: essay", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-2",
                title: "Unit 2: Communication",
                branches: [
                  {
                    id: "branch-eng-2-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-2-1", title: "Reading: mass media", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-2-2", title: "Grammar: reported speech", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-2-3", title: "Functions: making suggestions", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-2-4", title: "Writing: email", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-3",
                title: "Unit 3: Environment",
                branches: [
                  {
                    id: "branch-eng-3-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-3-1", title: "Reading: environmental issues", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-3-2", title: "Grammar: conditional sentences", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-3-3", title: "Functions: cause & effect", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-3-4", title: "Writing: report", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-4",
                title: "Unit 4: Science & Technology",
                branches: [
                  {
                    id: "branch-eng-4-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-4-1", title: "Reading: inventions", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-4-2", title: "Grammar: passive voice", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-4-3", title: "Functions: expressing certainty", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-4-4", title: "Writing: article", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-5",
                title: "Unit 5: Health",
                branches: [
                  {
                    id: "branch-eng-5-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-5-1", title: "Reading: healthy lifestyle", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-5-2", title: "Grammar: modals", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-5-3", title: "Functions: giving advice", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-5-4", title: "Writing: letter", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-6",
                title: "Unit 6: Art & Culture",
                branches: [
                  {
                    id: "branch-eng-6-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-6-1", title: "Reading: cultural heritage", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-6-2", title: "Grammar: relative clauses", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-6-3", title: "Functions: comparing", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-6-4", title: "Writing: review", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-7",
                title: "Unit 7: Work & Career",
                branches: [
                  {
                    id: "branch-eng-7-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-7-1", title: "Reading: job market", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-7-2", title: "Grammar: future forms", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-7-3", title: "Functions: expressing plans", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-7-4", title: "Writing: CV/cover letter", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-8",
                title: "Unit 8: Leisure & Travel",
                branches: [
                  {
                    id: "branch-eng-8-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-8-1", title: "Reading: tourism", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-8-2", title: "Grammar: phrasal verbs", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-8-3", title: "Functions: narrating", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-8-4", title: "Writing: story", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-9",
                title: "Unit 9: Global Issues",
                branches: [
                  {
                    id: "branch-eng-9-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-9-1", title: "Reading: globalization", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-9-2", title: "Grammar: linking words", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-9-3", title: "Functions: discussing pros & cons", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-9-4", title: "Writing: argumentative essay", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-eng-10",
                title: "Unit 10: Citizenship",
                branches: [
                  {
                    id: "branch-eng-10-1",
                    title: "Reading & Grammar & Writing",
                    partials: [
                      { id: "p-eng-10-1", title: "Reading: volunteering", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-10-2", title: "Grammar: revision", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-10-3", title: "Functions: persuasion", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-eng-10-4", title: "Writing: formal letter", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cat-regional",
    title: "الجهوي",
    subjects: [
      {
        id: "subj-french",
        title: "اللغة الفرنسية",
        units: [
          {
            id: "unit-fr-1",
            title: "الوحدة 1: دراسة الأعمال الأدبية",
            lessons: [
              {
                id: "lesson-fr-1",
                title: "Candide ou l'Optimisme (Voltaire)",
                branches: [
                  {
                    id: "branch-fr-1-1",
                    title: "تحليل العمل الأدبي",
                    partials: [
                      { id: "p-fr-1-1", title: "résumé, personnages", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-fr-1-2", title: "thèmes: critique de la philosophie optimiste, guerre, esclavage", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-fr-2",
                title: "Il était une fois un vieux couple heureux (Mohamed Khair-Eddine)",
                branches: [
                  {
                    id: "branch-fr-2-1",
                    title: "تحليل الرواية",
                    partials: [
                      { id: "p-fr-2-1", title: "analyse du roman, conflit tradition/modernité", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-fr-2",
            title: "الوحدة 2: أدوات اللغة",
            lessons: [
              {
                id: "lesson-fr-tools",
                title: "أدوات التعبير الأدبي",
                branches: [
                  {
                    id: "branch-fr-tools-1",
                    title: "الأساليب البلاغية والخطاب",
                    partials: [
                      { id: "p-frt-1-1", title: "Les figures de style (comparaison, métaphore, personnification...)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-frt-1-2", title: "Le discours direct et indirect", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-frt-1-3", title: "Les registres de langue (soutenu, courant, familier)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-frt-1-4", title: "Les liens logiques (cause, conséquence, opposition...)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-fr-3",
            title: "الوحدة 3: التعبير الكتابي",
            lessons: [
              {
                id: "lesson-fr-writing",
                title: "التعبير الكتابي",
                branches: [
                  {
                    id: "branch-fr-writing-1",
                    title: "الإنتاج الكتابي",
                    partials: [
                      { id: "p-frw-1-1", title: "La production écrite: texte argumentatif selon un plan dialectique ou thématique", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "subj-islamic",
        title: "التربية الإسلامية",
        units: [
          {
            id: "unit-isl-1",
            title: "الوحدة 1: التزكية",
            lessons: [
              {
                id: "lesson-isl-1",
                title: "التزكية",
                branches: [
                  {
                    id: "branch-isl-1-1",
                    title: "التوحيد والإيمان والأخلاق",
                    partials: [
                      { id: "p-isl-1-1", title: "التوحيد: أقسامه، نواقضه", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-1-2", title: "الإيمان: أركانه وشعبه", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-1-3", title: "العلم والعمل: أهمية العلم الشرعي والعمل به", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-1-4", title: "فلسفة الأخلاق في الإسلام", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-isl-2",
            title: "الوحدة 2: الاقتداء",
            lessons: [
              {
                id: "lesson-isl-2",
                title: "الاقتداء",
                branches: [
                  {
                    id: "branch-isl-2-1",
                    title: "القدوة والقيادة والبيت النبوي",
                    partials: [
                      { id: "p-isl-2-1", title: "الرسول قدوة في معاملته لأسرته وأصحابه", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-2-2", title: "الصبر وأثره في الدعوة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-2-3", title: "القيادة ومشروعية الإمامة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-2-4", title: "البيت النبوي (أمهات المؤمنين، أخلاقه)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-isl-3",
            title: "الوحدة 3: الاستجابة",
            lessons: [
              {
                id: "lesson-isl-3",
                title: "الاستجابة",
                branches: [
                  {
                    id: "branch-isl-3-1",
                    title: "الزواج والطلاق والمواريث",
                    partials: [
                      { id: "p-isl-3-1", title: "الزواج: أحكامه وحكمه، الحقوق الزوجية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-3-2", title: "الطلاق: أقسامه، العدة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-3-3", title: "الأسرة في الإسلام: التكافل، النفقة", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-3-4", title: "الإرث (المواريث): فروض محددة في القرآن", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-isl-4",
            title: "الوحدة 4: القسط",
            lessons: [
              {
                id: "lesson-isl-4",
                title: "القسط",
                branches: [
                  {
                    id: "branch-isl-4-1",
                    title: "العدل والأمانة والحقوق والبيئة",
                    partials: [
                      { id: "p-isl-4-1", title: "العدل: أنواعه، آثاره على الفرد والمجتمع", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-4-2", title: "الأمانة والوفاء بالعهد", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-4-3", title: "الحقوق (حق الله، حق النفس، حق الغير)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-4-4", title: "البيئة والمحافظة عليها في الإسلام", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-isl-5",
            title: "الوحدة 5: الحكمة",
            lessons: [
              {
                id: "lesson-isl-5",
                title: "الحكمة",
                branches: [
                  {
                    id: "branch-isl-5-1",
                    title: "التسامح والتضامن والقيم الإسلامية",
                    partials: [
                      { id: "p-isl-5-1", title: "التسامح الديني والفكري", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-5-2", title: "التضامن الاجتماعي (التكافل، الوقف)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-5-3", title: "الاستحقاق والمسؤولية الفردية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-isl-5-4", title: "القيم الإسلامية الكونية (السلام، التعاون)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "subj-arabic",
        title: "اللغة العربية",
        units: [
          {
            id: "unit-ar-1",
            title: "الوحدة 1: النصوص",
            lessons: [
              {
                id: "lesson-ar-texts",
                title: "النصوص",
                branches: [
                  {
                    id: "branch-ar-texts-1",
                    title: "أنواع النصوص",
                    partials: [
                      { id: "p-ar-1-1", title: "النص الإشهاري (خصائصه، أدوات الإقناع)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-1-2", title: "النص الصحفي (الخبر، التقرير، المقال)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-1-3", title: "النص السياسي (الخطاب، الحجاج)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-1-4", title: "نصوص قضايا معاصرة (العولمة، الهوية)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-1-5", title: "نصوص القيم (الإنسانية، التسامح)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-ar-2",
            title: "الوحدة 2: علوم اللغة",
            lessons: [
              {
                id: "lesson-ar-lang",
                title: "علوم اللغة العربية",
                branches: [
                  {
                    id: "branch-ar-lang-1",
                    title: "الأساليب اللغوية",
                    partials: [
                      { id: "p-ar-2-1", title: "الأمر والنهي (صيغهما، أغراضهما البلاغية)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-2-2", title: "الاستفهام (الأدوات، المعاني الضمنية)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-2-3", title: "التمني (ليت، لعل...)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-2-4", title: "المصادر (المصدر الصريح والمؤول والميمي)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-2-5", title: "النسبة (النسب إلى الاسم، أحكامه)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-2-6", title: "الحقول الدلالية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-ar-3",
            title: "الوحدة 3: التعبير والإنشاء",
            lessons: [
              {
                id: "lesson-ar-writing",
                title: "التعبير والإنشاء",
                branches: [
                  {
                    id: "branch-ar-writing-1",
                    title: "أنواع الكتابة",
                    partials: [
                      { id: "p-ar-3-1", title: "كتابة تقرير (حول ظاهرة، كتاب، نشاط)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-3-2", title: "إنجاز بطاقة وصفية أو تركيبية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-ar-3-3", title: "إنشاء خطاطة (ذهنية) لنص أو موضوع", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "subj-history-geo",
        title: "التاريخ والجغرافيا",
        units: [
          {
            id: "unit-hist",
            title: "التاريخ",
            lessons: [
              {
                id: "lesson-hist-1",
                title: "التحولات الكبرى في القرن 19",
                branches: [
                  {
                    id: "branch-hist-1-1",
                    title: "الثورة الصناعية والحركات الوطنية",
                    partials: [
                      { id: "p-hist-1-1", title: "الثورة الصناعية وتأثيراتها الاقتصادية والاجتماعية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-hist-1-2", title: "الحركات الوطنية وبروز الوعي القومي", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-hist-2",
                title: "الاستعمار والحماية بالمغرب",
                branches: [
                  {
                    id: "branch-hist-2-1",
                    title: "أشكال الاستعمار ومعاهدة الحماية",
                    partials: [
                      { id: "p-hist-2-1", title: "أشكال الاستعمار (الفرنسي والإسباني)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-hist-2-2", title: "معاهدة الحماية (1912) وردود الفعل الوطنية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-hist-3",
                title: "المقاومة المغربية",
                branches: [
                  {
                    id: "branch-hist-3-1",
                    title: "أشكال المقاومة",
                    partials: [
                      { id: "p-hist-3-1", title: "المقاومة المسلحة (بقيادة عبد الكريم الخطابي، موحا أو حمو الزياني)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-hist-3-2", title: "الحركة الوطنية الحديثة والمطالبة بالإصلاحات", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-hist-4",
                title: "الاستقلال",
                branches: [
                  {
                    id: "branch-hist-4-1",
                    title: "مراحل الاستقلال",
                    partials: [
                      { id: "p-hist-4-1", title: "وثيقة المطالبة بالاستقلال (1944)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-hist-4-2", title: "مفاوضات الاستقلال وعودة الملك محمد الخامس", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "unit-geo",
            title: "الجغرافيا",
            lessons: [
              {
                id: "lesson-geo-1",
                title: "التنمية البشرية بالمغرب",
                branches: [
                  {
                    id: "branch-geo-1-1",
                    title: "مؤشرات التنمية واستراتيجيات محاربة الفقر",
                    partials: [
                      { id: "p-geo-1-1", title: "مؤشرات التنمية (التعليم، الصحة، الدخل)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-geo-1-2", title: "استراتيجيات محاربة الفقر (المبادرة الوطنية للتنمية البشرية)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-geo-2",
                title: "الموارد الطبيعية وإعداد التراب الوطني",
                branches: [
                  {
                    id: "branch-geo-2-1",
                    title: "الموارد الطبيعية والجهوية",
                    partials: [
                      { id: "p-geo-2-1", title: "الموارد المائية والغابوية، استنزافها وتدبيرها", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-geo-2-2", title: "إعداد التراب الوطني (الجهوية المتقدمة، المدن الجديدة)", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              },
              {
                id: "lesson-geo-3",
                title: "القوى العالمية الصاعدة",
                branches: [
                  {
                    id: "branch-geo-3-1",
                    title: "القوى الاقتصادية العالمية",
                    partials: [
                      { id: "p-geo-3-1", title: "الولايات المتحدة الأمريكية: القوة الاقتصادية والعسكرية", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                      { id: "p-geo-3-2", title: "الصين والهند: عوامل النمو والتحديات", content: "", exercises: [], notes: "", completed: false, reviewCount: 0 },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];