import { Cite } from "@/components/article/Cite";
import { ChartFigure } from "@/components/article/ChartFigure";
import { References } from "@/components/article/References";
import { VideoEmbed } from "@/components/article/VideoEmbed";
import { DataVolumeChart } from "@/components/charts/DataVolumeChart";
import { FrontierFundingChart } from "@/components/charts/FrontierFundingChart";
import { ParadigmPublicRecordChart } from "@/components/charts/ParadigmPublicRecordChart";
import { VJEPAErrorChart } from "@/components/charts/VJEPAErrorChart";

const REFERENCES = [
  {
    id: 1,
    text: 'LeCun, Y. "World Models: Enabling the next AI revolution." Frontiers of Embodied AI, ETH Zürich, May 29, 2026.',
    url: "https://www.youtube.com/watch?v=72Xj8k5WQX4",
  },
  {
    id: 2,
    text: "AMI Labs seed funding announcement. $1.03B at $3.5B pre-money valuation, March 10, 2026.",
    url: "https://www.startuphub.ai/ai-news/artificial-intelligence/2026/yann-lecun-on-world-models-and-the-ai-revolution",
  },
  {
    id: 3,
    text: "Advanced Machine Intelligence SASU. French corporate registry incorporation, December 15, 2025.",
  },
  {
    id: 4,
    text: 'LeCun, Y., et al. "A Path Towards Autonomous Machine Intelligence." OpenReview, 2022.',
    url: "https://openreview.net/forum?id=BZ5a1r-kVsf",
  },
  {
    id: 5,
    text: 'Assran, M., et al. "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA)." CVPR, 2023.',
    url: "https://arxiv.org/abs/2301.08243",
  },
  {
    id: 6,
    text: 'Bardes, A., et al. "V-JEPA: Revisiting Feature Prediction for Learning Visual Representations from Video." Meta AI Research, 2024.',
    url: "https://arxiv.org/abs/2404.00571",
  },
  {
    id: 7,
    text: "Yann LeCun. Wikipedia. Chief AI Scientist, Meta Platforms (2018–2025); founder, FAIR (2013).",
    url: "https://en.wikipedia.org/wiki/Yann_LeCun",
  },
  {
    id: 8,
    text: "Nabla partnership. AMI Labs first named strategic partner for clinical documentation deployment.",
  },
  {
    id: 9,
    text: 'Moravec, H. "Mind Children: The Future of Robot and Human Intelligence." Harvard University Press, 1988.',
  },
  {
    id: 10,
    text: "Murphy, H. Yann LeCun to leave Meta, launch AI startup focused on Advanced Machine Intelligence. Reuters, November 19, 2025.",
    url: "https://www.reuters.com/technology/yann-lecun-leave-meta-launch-ai-startup-focused-advanced-machine-intelligence-2025-11-19/",
  },
  {
    id: 11,
    text: "Kelion, L. Why an AI 'godfather' is quitting Meta after 12 years. BBC News, November 2025.",
    url: "https://www.bbc.com/news/articles/cdx4x47w8p1o",
  },
  {
    id: 12,
    text: "Kafka, P. The Godfather of Meta's AI Thinks the AI Boom Is a Dead End. Business Insider, November 2025.",
    url: "https://www.businessinsider.com/meta-ai-yann-lecun-llm-world-model-intelligence-criticism-2025-11",
  },
  {
    id: 13,
    text: "Anthropic Series E funding. $3.5B raised at $61.5B post-money valuation, March 2025. Total disclosed funding ~$18.2B.",
    url: "https://www.anthropic.com/news/anthropic-raises-series-e-at-usd61-5b-post-money-valuation",
  },
  {
    id: 14,
    text: "Murphy, H. 'AI godmother' Fei-Fei Li raises $230 million to launch AI startup World Labs. Reuters, September 13, 2024.",
    url: "https://www.reuters.com/technology/artificial-intelligence/ai-godmother-fei-fei-li-raises-230-million-launch-ai-startup-2024-09-13/",
  },
  {
    id: 15,
    text: "World Labs Series B. $1B round at approximately $5B valuation, February 18, 2026. Total disclosed funding ~$1.23B.",
    url: "https://tracxn.com/d/companies/world-labs/__9k2QeFKxbXi5EffPqD-w46E9BgqtWSgCrLgRK5sEwKE/funding-and-investors",
  },
  {
    id: 16,
    text: "Murphy, H. Mira Murati's AI startup Thinking Machines raises $2 billion in seed round. Reuters, July 15, 2025.",
    url: "https://www.reuters.com/technology/mira-muratis-ai-startup-thinking-machines-raises-2-billion-a16z-led-round-2025-07-15/",
  },
  {
    id: 17,
    text: "Safe Superintelligence funding. $2 billion raised at $32 billion valuation, 2025.",
    url: "https://www.calcalistech.com/ctechnews/article/hjfywdtajl",
  },
];

export function AmiLabsBriefing() {
  return (
    <div className="article-body max-w-none">
      <div className="my-8 grid gap-8 lg:grid-cols-3 lg:items-start">
        <div className="space-y-5 lg:col-span-2">
          <p className="text-xl leading-relaxed text-stone-600">
            Yann LeCun took the stage at ETH Zürich in May 2026. The Turing Award winner, who spent
            a decade leading AI research at Meta, made a blunt claim: today&rsquo;s AI is nowhere
            close to human intelligence, and the chatbot boom is headed down a dead end.<Cite id={1} />{" "}
            Then he announced his new company, AMI Labs, backed by a record $1.03 billion seed round
            at a $3.5 billion valuation.<Cite id={2} />
          </p>

          <p className="!mb-0">
            His argument is simple to state, even if the science behind it is not: language models
            like ChatGPT learn from text. But humans learn about the world by seeing, touching, and
            moving through it. LeCun believes the next breakthrough in AI will come from systems that
            learn the way children do: by watching the physical world, not by reading more of the
            internet.
          </p>

          <p className="!mb-0">
            This briefing walks through his ETH Zürich lecture, explains the key ideas in plain
            language, and maps out what AMI Labs is building, who is behind it, and how it fits into
            the wider AI landscape.
          </p>
        </div>

        <aside className="lg:col-span-1">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-stone-400">
            Watch the lecture
          </p>
          <VideoEmbed
            compact
            videoId="72Xj8k5WQX4"
            title="Yann LeCun: World Models: Enabling the next AI revolution · ETH Zurich"
          />
        </aside>
      </div>

      <h2 id="data-wall">Why Today&rsquo;s AI Falls Short</h2>

      <h3>Easy for us, hard for machines</h3>
      <p>
        LeCun opens with a puzzle that researchers call the Moravec paradox: the things humans
        find easy (walking, catching a ball, tidying a room) are brutally hard for AI. The
        things we find hard (math, chess, coding) machines handle with ease.<Cite id={9} />
      </p>

      <p>
        A ten-year-old can do chores without being trained. A teenager learns to drive in a
        weekend. Meanwhile, self-driving car companies have logged millions of hours of data and
        still can&rsquo;t match a human driver.<Cite id={1} /> Something fundamental is missing
        from how we train AI today.
      </p>

      <blockquote>
        &ldquo;Machine learning sucks&hellip; when we compare the learning abilities of
        machines with humans and animals, clearly there is a big gap.&rdquo;
        <br />
        <span className="text-sm not-italic text-stone-400">
          Yann LeCun, ETH Zürich, 00:00:12<Cite id={1} />
        </span>
      </blockquote>

      <h3>The data wall</h3>
      <p>
        Here is the number that anchors LeCun&rsquo;s critique. Training a modern large language
        model requires roughly 20 to 30 trillion tokens of text, enough that it would take a
        person 400,000 years to read it all.<Cite id={1} /> And after all that training, the
        model still doesn&rsquo;t understand basic physics. It has never seen a ball fall.
      </p>

      <p>
        Compare that to a four-year-old. In four years of looking around, a child absorbs
        roughly 10<sup>14</sup> bytes of visual information and develops common sense: objects
        don&rsquo;t vanish, cups fall down not up, people don&rsquo;t walk through walls.<Cite id={1} />{" "}
        LeCun&rsquo;s point: children learn more about reality from far less data, because they
        learn from the right kind of data: the physical world, not text about it.
      </p>

      <ChartFigure
        title="Figure 1. How much data does each approach need?"
        caption="The gap between LLM training data and human sensory learning spans many orders of magnitude. LLMs consume trillions of text tokens; a child gains physical understanding from visual input in four years. LeCun argues this gap explains why text scaling alone cannot produce grounded intelligence."
        source="LeCun, ETH Zürich lecture, timestamp 00:10:17"
        sourceRef={1}
        sourceUrl="https://www.youtube.com/watch?v=72Xj8k5WQX4&t=617"
      >
        <DataVolumeChart />
      </ChartFigure>

      <p>
        Text, LeCun notes, is a compressed summary of what humans already know. It&rsquo;s
        useful, but it&rsquo;s not the same as direct experience.<Cite id={4} /> The real world
        is messy, continuous, and unpredictable. Current AI architectures weren&rsquo;t built
        for that.
      </p>

      <h2 id="autoregressive-failure">The Problem with Chatbots</h2>

      <h3>Predicting words, not thinking</h3>
      <p>
        ChatGPT and similar models work by predicting the next word, one at a time. LeCun
        compares this to a reactive system. It responds, but it doesn&rsquo;t truly reason.<Cite id={1} />{" "}
        When you plan a trip, you don&rsquo;t think in sentences. You imagine outcomes, weigh
        options, and decide, all before you say a single word. LeCun wants AI that works the
        same way: thinking in an internal model of the world, with language as just the output.
      </p>

      <h3>A safer way to build AI</h3>
      <p>
        LeCun proposes a different approach: instead of generating text, the system imagines
        possible actions, predicts what would happen for each one, and picks the best option
        based on a set of rules, including safety rules baked directly into the math.<Cite id={1} />
      </p>

      <blockquote>
        &ldquo;Because the system can only output actions that minimize the safety cost
        function, it becomes impossible to jailbreak in the way fine-tuned LLMs are
        bypassed.&rdquo;
        <br />
        <span className="text-sm not-italic text-stone-400">
          Paraphrased from LeCun, 00:15:56<Cite id={1} />
        </span>
      </blockquote>

      <p>
        Today&rsquo;s chatbots add safety guardrails after the fact, and clever users routinely
        find ways around them. LeCun&rsquo;s approach would make unsafe outputs mathematically
        impossible, not just discouraged.
      </p>

      <h3>Planning in steps</h3>
      <p>
        Another gap: when you plan a vacation, you think &ldquo;book a flight, then get to the
        airport,&rdquo; not &ldquo;move left foot 30 degrees, shift weight forward.&rdquo;
        AI systems struggle to plan at this higher level. LeCun calls hierarchical planning an
        open research problem, and one that word-prediction models are poorly suited to
        solve.<Cite id={1} />
      </p>

      <h2 id="jepa">LeCun&rsquo;s Alternative: World Models (JEPA)</h2>

      <h3>Stop generating pixels</h3>
      <p>
        LeCun&rsquo;s answer is an architecture called JEPA (Joint Embedding Predictive
        Architecture).<Cite id={4} /><Cite id={5} /> The core idea: instead of trying to predict
        every pixel in the next video frame (like diffusion models or digital twins do), JEPA
        learns a compressed internal picture of the world and predicts how that picture changes
        when something happens.
      </p>

      <p>
        Why does this matter? The real world is full of random noise: leaves blowing, shadows
        shifting, people walking by. Forcing a model to predict every detail is a waste. JEPA
        strips out the noise and focuses on what actually matters: structure, objects, and how
        they move.<Cite id={1} />
      </p>

      <div className="my-8 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Video generators (Sora, etc.)</th>
              <th>JEPA world models</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What it predicts</td>
              <td>Every pixel in the next frame</td>
              <td>A compressed summary of what changed</td>
            </tr>
            <tr>
              <td>Random noise (wind, lighting)</td>
              <td>Must model all of it</td>
              <td>Filtered out. Focuses on structure</td>
            </tr>
            <tr>
              <td>Output</td>
              <td>Generated video</td>
              <td>A prediction of what happens next. No images produced</td>
            </tr>
            <tr>
              <td>Best for</td>
              <td>Creating visuals</td>
              <td>Planning actions (robotics, control systems)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Preventing the &ldquo;cheating&rdquo; problem</h3>
      <p>
        A major challenge in training these models is collapse: the AI finds a shortcut by
        outputting the same answer every time, which makes its error rate look great but teaches
        it nothing.<Cite id={1} /> LeCun describes three techniques to prevent this: Barlow
        Twins, VICReg, and a newer method called SiggReg. The goal is the same: force the model
        to pay attention to what&rsquo;s actually in front of it.
      </p>

      <h2 id="vjepa">Learning Physics from Video</h2>

      <p>
        When JEPA is trained on video (called V-JEPA), something surprising happens: the model
        starts to understand physics on its own, without anyone teaching it.<Cite id={6} />
      </p>

      <p>
        Researchers test infant intelligence by showing babies impossible events (a ball that
        vanishes mid-air, a block that passes through a wall) and measuring their surprise.
        LeCun showed the same trick works on V-JEPA: when the model sees something physically
        impossible, its prediction error spikes. When physics behaves normally, error stays
        low.<Cite id={1} />
      </p>

      <ChartFigure
        title="Figure 2. V-JEPA reacts to impossible physics"
        caption="When shown a physically impossible sequence (e.g., a ball disappearing mid-air), V-JEPA's prediction error jumps sharply. Normal sequences produce stable, low error. This 'surprise' response emerges without any explicit physics training, similar to how infants react to impossible events."
        source="LeCun, ETH Zürich lecture, timestamp 00:52:03; Bardes et al., V-JEPA (2024)"
        sourceRef={[1, 6]}
        sourceUrl="https://arxiv.org/abs/2404.00571"
      >
        <VJEPAErrorChart />
      </ChartFigure>

      <p>
        The model also learns to estimate depth and identify objects from a single frame: skills
        that emerge naturally from watching video, not from labeled training data.<Cite id={1} />
      </p>

      <h2 id="meta-break">The Break with Meta</h2>

      <p>
        To understand AMI Labs, you have to understand why LeCun left the company he helped
        build. He spent 12 years at Meta, five as founding director of FAIR and seven as Chief AI
        Scientist. He shaped everything from Instagram recommendations to the Llama language
        models.<Cite id={7} /><Cite id={10} /> Then, in November 2025, he walked away.
      </p>

      <p>
        The split wasn&rsquo;t personal drama for its own sake. It was a fight over the future of
        AI. After ChatGPT launched in 2022, Meta poured billions into large language models:
        hiring aggressively, open-sourcing Llama, and eventually creating a new division called
        Meta Superintelligence Labs, led by former Scale AI CEO Alexandr Wang.<Cite id={11} />
        <Cite id={12} /> The message was clear: the company&rsquo;s bet was on scaling chatbots.
      </p>

      <p>
        LeCun disagreed, and said so publicly. Months before his departure, he told an audience in Brooklyn
        that LLMs &ldquo;are sucking the air out of the room anywhere they go, and so
        there&rsquo;s basically no resources left for anything else.&rdquo; He argued they were
        useful tools, but not a path to human-level intelligence.<Cite id={12} /> At ETH
        Zürich, he went further: most of Silicon Valley is focused on LLMs, and his contrarian
        view has made him unpopular in scaling circles.<Cite id={1} />
      </p>

      <blockquote>
        &ldquo;The claims that somehow by just scaling up LLMs, we&rsquo;re going to reach super
        human intelligence, that is simply not going to happen.&rdquo;
        <br />
        <span className="text-sm not-italic text-stone-400">
          Yann LeCun, BBC interview, 2026<Cite id={11} />
        </span>
      </blockquote>

      <p>
        The irony is sharp. Much of the JEPA research AMI Labs is built on (I-JEPA and V-JEPA)
        was developed inside Meta&rsquo;s own labs.<Cite id={5} /><Cite id={6} /> LeCun helped
        create the intellectual foundation at FAIR, then watched Meta prioritize commercializing
        Llama over the world model work he believed mattered more.
      </p>

      <p>
        When he announced his exit, LeCun kept it cordial. He said Meta would remain a partner
        in his new venture, and Zuckerberg publicly credited him with laying the groundwork for
        Meta&rsquo;s AI infrastructure.<Cite id={10} /> But the direction of travel was
        opposite: Meta doubled down on LLM scaling under Superintelligence Labs; LeCun
        incorporated AMI Labs in Paris weeks later to prove the industry is betting on the wrong
        architecture.<Cite id={3} /><Cite id={2} />
      </p>

      <h2 id="ami-labs">AMI Labs: The Company</h2>

      <p>
        Near the end of his ETH Zürich talk, LeCun formally announced AMI Labs, Advanced
        Machine Intelligence Labs.<Cite id={1} /><Cite id={2} /> The mission: build
        &ldquo;physical AI&rdquo;: systems that can control robots, factory equipment, and
        medical devices in the messy real world, where chatbots don&rsquo;t work.<Cite id={1} />
      </p>

      <div className="my-8 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Legal name</td>
              <td>Advanced Machine Intelligence SASU</td>
            </tr>
            <tr>
              <td>Founded</td>
              <td>December 15, 2025<Cite id={3} /></td>
            </tr>
            <tr>
              <td>Headquarters</td>
              <td>Paris, France</td>
            </tr>
            <tr>
              <td>Other offices</td>
              <td>New York, Montreal, Singapore</td>
            </tr>
            <tr>
              <td>Valuation</td>
              <td>$3.5 billion (pre-money, March 2026)<Cite id={2} /></td>
            </tr>
            <tr>
              <td>Money raised</td>
              <td>$1.03 billion seed round<Cite id={2} /></td>
            </tr>
            <tr>
              <td>When product ships</td>
              <td>~5 years (stated at founding)</td>
            </tr>
            <tr>
              <td>First partner</td>
              <td>Nabla (AI for doctors)<Cite id={8} /></td>
            </tr>
            <tr>
              <td>Target industries</td>
              <td>Healthcare, robotics, factories, aerospace</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ChartFigure
        title="Figure 3. How AMI Labs' seed round compares"
        caption="Single-round raises in USD billions. AMI Labs: $1.03 billion seed (March 2026). Thinking Machines Lab: $2 billion seed (July 2025). Safe Superintelligence: $2 billion (2025). World Labs: $1 billion Series B (February 2026). Anthropic shown for scale: $3.5 billion Series E (March 2025), not a seed round."
        source="StartupHub.ai; Reuters; Calcalist; Tracxn; Anthropic"
        sourceRef={[2, 13, 15, 16, 17]}
        sourceUrl="https://www.startuphub.ai/ai-news/artificial-intelligence/2026/yann-lecun-on-world-models-and-the-ai-revolution"
      >
        <FrontierFundingChart />
      </ChartFigure>

      <h3>Key dates</h3>
      <div className="my-8 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>When</th>
              <th>What happened</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dec 2013</td>
              <td>LeCun joins Facebook, creates FAIR (AI research lab)<Cite id={7} /></td>
            </tr>
            <tr>
              <td>2022–2024</td>
              <td>JEPA research published at Meta<Cite id={5} /><Cite id={6} /></td>
            </tr>
            <tr>
              <td>Nov 2025</td>
              <td>
                LeCun leaves Meta after public disagreements over LLM strategy; Meta launches
                Superintelligence Labs under Alexandr Wang<Cite id={10} /><Cite id={11} />
              </td>
            </tr>
            <tr>
              <td>Dec 2025</td>
              <td>AMI Labs incorporated in Paris<Cite id={3} /></td>
            </tr>
            <tr>
              <td>Mar 2026</td>
              <td>$1.03B seed round closes<Cite id={2} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="executives">Who&rsquo;s Running It</h2>

      <p>
        AMI Labs pulled senior talent directly from Meta and top research labs. Four of the six
        named executives previously worked at Meta.
      </p>

      <div className="my-8 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Person</th>
              <th>Role</th>
              <th>Background</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yann LeCun</td>
              <td>Executive Chairman</td>
              <td>Former Chief AI Scientist at Meta<Cite id={7} /></td>
            </tr>
            <tr>
              <td>Alexandre LeBrun</td>
              <td>CEO</td>
              <td>CEO of Nabla; sold Wit.ai to Facebook in 2015</td>
            </tr>
            <tr>
              <td>Laurent Solly</td>
              <td>COO</td>
              <td>Former VP at Meta (Southern Europe)</td>
            </tr>
            <tr>
              <td>Saining Xie</td>
              <td>Chief Science Officer</td>
              <td>NYU professor; Meta computer vision researcher</td>
            </tr>
            <tr>
              <td>Pascale Fung</td>
              <td>Chief R&amp;I Officer</td>
              <td>Expert in speech and human-robot interaction (Singapore)</td>
            </tr>
            <tr>
              <td>Michael Rabbat</td>
              <td>VP, World Models</td>
              <td>Former Meta foundational AI researcher</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        LeBrun is the commercial bridge. As CEO of Nabla, AMI&rsquo;s first partner, he can
        test JEPA in real hospitals. In the Q&amp;A, LeCun explained that safety rules (like
        &ldquo;don&rsquo;t hit the wall&rdquo;) can be added with a small amount of extra
        training on top of the core model, without rebuilding it from scratch.<Cite id={1} />
      </p>

      <h2 id="competitive">Competitive Position</h2>

      <div className="my-8 rounded-sm border border-stone-200 bg-stone-50 p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
          Don&rsquo;t confuse these
        </p>
        <p className="mt-3 text-base leading-relaxed text-stone-700">
          <strong>World Labs</strong> is a company (founded by Fei-Fei Li). It builds AI that
          generates and understands 3D spaces and video. Its marketing uses the phrase &ldquo;large
          world models,&rdquo; but the product direction is visual: creating environments you can
          see and move through.
        </p>
        <p className="mt-3 text-base leading-relaxed text-stone-700">
          <strong>World models</strong> is what LeCun and AMI Labs mean technically. It is an
          architecture, not a company name. The system learns an internal model of how the world
          works so it can predict what happens next and plan actions. It does not generate pixels.
          AMI Labs uses JEPA. World Labs does not.
        </p>
        <p className="mt-3 text-sm text-stone-500">
          Same words, different things. One is a startup building spatial AI. The other is a
          research approach to physical intelligence.
        </p>
      </div>

      <p>
        Follow the money and almost all of it has gone to chatbots. OpenAI, Google, Anthropic,
        Meta: scale the language model, ship the API, repeat. World Labs is chasing spatial AI.
        AMI Labs is chasing something else: systems that watch the real world, learn how it
        behaves, and figure out what to do inside it.
      </p>

      <p>
        The chart below uses one leading company per approach and only numbers from public
        funding announcements. Anthropic represents the LLM camp. World Labs is the spatial AI
        company (not the same as LeCun&rsquo;s world-model architecture). AMI Labs is the JEPA
        bet. Different stages and round types, but it shows where capital is landing.
      </p>

      <ChartFigure
        title="Figure 4. Public valuations and capital raised by paradigm (exemplar companies)"
        caption="Latest disclosed valuation (dark bars) and total capital raised (light bars), in USD billions. Anthropic: $61.5B valuation and ~$18.2B total raised at Series E, March 2025. World Labs: ~$5B valuation and ~$1.23B total raised, February 2026. AMI Labs: $3.5B pre-money valuation and $1.03B seed, March 2026. AMI figure is pre-money; others are post-money where disclosed."
        source="Anthropic press release; Reuters; Tracxn; StartupHub.ai"
        sourceRef={[2, 13, 14, 15]}
      >
        <ParadigmPublicRecordChart />
      </ChartFigure>

      <div className="my-8 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Paradigm</th>
              <th>Founded</th>
              <th>Latest valuation</th>
              <th>Capital raised</th>
              <th>Product status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anthropic</td>
              <td>LLMs</td>
              <td>2021</td>
              <td>$61.5B post-money (Mar 2025)<Cite id={13} /></td>
              <td>~$18.2B total<Cite id={13} /></td>
              <td>Shipping (Claude)</td>
            </tr>
            <tr>
              <td>World Labs</td>
              <td>Spatial / 3D (company)</td>
              <td>2023</td>
              <td>~$5B (Feb 2026)<Cite id={15} /></td>
              <td>~$1.23B total<Cite id={14} /><Cite id={15} /></td>
              <td>In development</td>
            </tr>
            <tr>
              <td>AMI Labs</td>
              <td>World models / JEPA (architecture)</td>
              <td>Dec 2025</td>
              <td>$3.5B pre-money (Mar 2026)<Cite id={2} /></td>
              <td>$1.03B seed<Cite id={2} /></td>
              <td>~5 years to product<Cite id={1} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The pattern is clear even with imperfect comparisons. LLM companies are already at scale.
        Spatial AI is funded and building. AMI Labs raised a massive seed round on a thesis, not
        a product.
      </p>

      <h2 id="takeaway">What to Watch</h2>

      <p>
        LeCun closed with direct advice: researchers should stop focusing on chatbots, pixel
        generators, and reinforcement learning. He called RL &ldquo;horribly
        sample-inefficient.&rdquo;<Cite id={1} /> Whether he&rsquo;s right will shape AMI
        Labs&rsquo; future. Three things to track:
      </p>

      <ol>
        <li>
          <strong>Can they keep hiring?</strong> Four Meta veterans in six months is a strong
          start. Sustaining that pace will show whether top researchers believe in the vision.
        </li>
        <li>
          <strong>Does Nabla prove it works?</strong> The Nabla partnership is the first real
          test. If JEPA beats chatbot wrappers in hospitals, enterprise buyers have something
          concrete to evaluate.
        </li>
        <li>
          <strong>Do chatbots plateau?</strong> AMI&rsquo;s $3.5B valuation bets that scaling
          language models hits a wall. If GPT-5 and beyond keep improving through 2028 without a
          new architecture, AMI&rsquo;s five-year timeline gets harder to defend.
        </li>
      </ol>

      <p>
        Most databases list AMI Labs as just another AI startup. At $3.5 billion with no product,
        it&rsquo;s really a bet that the entire chatbot playbook is wrong, and that whoever
        builds AI that understands the physical world will win the next decade.
      </p>

      <References items={REFERENCES} />
    </div>
  );
}
