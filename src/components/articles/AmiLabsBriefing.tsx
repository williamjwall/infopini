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
      <div className="my-6 grid gap-6 lg:my-8 lg:grid-cols-3 lg:items-start lg:gap-8">
        <div className="min-w-0 space-y-4 lg:col-span-2 lg:space-y-5">
          <p className="text-lg leading-relaxed text-stone-600 sm:text-xl">
            Yann LeCun took the stage at ETH Zürich in May 2026 and said the quiet part out
            loud: the systems the industry is pouring money into are not on a path to human-level
            intelligence.<Cite id={1} /> A few minutes later he talked about his new company, AMI
            Labs, which had closed a $1.03 billion seed round at a $3.5 billion
            valuation.<Cite id={2} />
          </p>

          <p className="!mb-0">
            LeCun spent a decade as Meta&rsquo;s chief AI scientist. His bet now is that
            chatbots, trained on text, miss most of what a child learns by looking around. AMI
            Labs wants machines that learn from sensory data and can act in the physical world.
          </p>

          <p className="!mb-0">
            What follows is based mainly on that ETH lecture, plus public filings and funding
            announcements around the company.
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

      <h2 id="data-wall">Chatbots Don&rsquo;t Know Physics</h2>

      <h3>Easy for us, hard for machines</h3>
      <p>
        LeCun starts with a familiar gap. Walking across a room, catching a ball, cleaning up:
        kids do this without a training set. Symbolic math and chess, which feel hard to us, were
        cracked years ago by machines. Psychologists call this the Moravec paradox.<Cite id={9} />
      </p>

      <p>
        A teenager can learn to drive in a weekend. Self-driving companies have millions of hours
        of logged data and still stop short of a fully reliable driver.<Cite id={1} /> If your
        training method needs that much data for a skill humans pick up quickly, something about
        the method is wrong.
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
        Here is the calculation LeCun walks through in the talk
        (<a
          href="https://www.youtube.com/watch?v=72Xj8k5WQX4&t=617s"
          target="_blank"
          rel="noopener noreferrer"
        >
          ~00:10:17
        </a>
        ). Big language models are trained on roughly the whole public text of the internet:
        about 20 trillion words, or 30 trillion tokens. At about 3 bytes per token, that is
        about 10<sup>14</sup> bytes of text.<Cite id={1} />
      </p>

      <p>
        A four-year-old, through vision alone, takes in about the same amount: also roughly
        10<sup>14</sup> bytes over four years of waking life (optic nerve bandwidth times
        waking hours).<Cite id={1} />
      </p>

      <ChartFigure
        title="Figure 1. Data volume: LLM text vs. a child's vision"
        caption="Both bars are about 10¹⁴ bytes, matching LeCun's ETH Zürich slide. Left: text used to train today's largest LLMs. Right: visual input a four-year-old receives. Same unit (bytes), same order of magnitude."
        source="LeCun, ETH Zürich lecture, timestamp 00:10:17"
        sourceRef={1}
        sourceUrl="https://www.youtube.com/watch?v=72Xj8k5WQX4&t=617s"
      >
        <DataVolumeChart />
      </ChartFigure>

      <p>
        So the volumes match. What you get out of them does not. After four years of looking,
        a child knows objects fall, walls are solid, and the world is three-dimensional. An LLM
        trained on a similar byte budget of text has never watched a ball drop.
      </p>

      <p>
        LeCun also puts the text corpus in human terms: reading it would take about 400,000
        years.<Cite id={1} /> A child pulls in the same number of bytes in four years because
        vision moves far more information than language does. Text compresses what people already
        know how to say. It is not a substitute for seeing the world change when you move.
      </p>

      <p>
        People sometimes object that video is too redundant for learning. LeCun treats that
        redundancy as useful. If every frame is slightly different but the underlying world
        stays related, a self-supervised model has something to latch onto. That stream is what
        he wants AMI Labs working with, not another pass over the internet&rsquo;s text
        dump.<Cite id={4} />
      </p>

      <h2 id="autoregressive-failure">The Problem with Chatbots</h2>

      <h3>Predicting words, not thinking</h3>
      <p>
        Models like ChatGPT choose the next token, then the next, through a fixed stack of
        layers.<Cite id={1} /> LeCun calls that reactive. When people plan, they mostly do it
        without narrating. You picture what might happen, discard bad options, then talk. He
        wants machines that keep language as the last step, not the whole thought process.
      </p>

      <h3>A safer way to build AI</h3>
      <p>
        His alternative runs a search at inference time. The system proposes actions, uses a
        world model to check likely outcomes, and scores those outcomes against an objective,
        including hard safety constraints written into the math.<Cite id={1} />
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
        Chatbots usually get safety as a layer on top of generation. Users find ways around it.
        If forbidden outcomes are ruled out by the objective itself, the jailbreak game changes.
      </p>

      <h3>Planning in steps</h3>
      <p>
        People plan trips as &ldquo;get to the airport,&rdquo; not as a sequence of foot
        angles. Machines still struggle to work at that middle level of abstraction. LeCun
        flags hierarchical planning as an open problem, and not one that next-token models are
        set up to answer.<Cite id={1} />
      </p>

      <h2 id="jepa">LeCun&rsquo;s Alternative: World Models (JEPA)</h2>

      <h3>Stop generating pixels</h3>
      <p>
        JEPA stands for Joint Embedding Predictive Architecture.<Cite id={4} /><Cite id={5} />{" "}
        Instead of drawing the next video frame pixel by pixel, as diffusion models and digital
        twins often try to do, JEPA compresses what it sees into a smaller representation and
        predicts how that representation should change after an action.
      </p>

      <p>
        Leaves, lighting flicker, background motion: the world is noisy. Spending model capacity
        on those details does not help an agent decide what to do. JEPA tries to ignore them and
        keep the structure that matters for prediction.<Cite id={1} />
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
        These training setups can collapse: the network learns to spit out a constant vector,
        which drives prediction error toward zero while learning nothing about the input.<Cite id={1} />{" "}
        LeCun walks through methods meant to stop that (Barlow Twins, VICReg, and a newer
        method called SiggReg). The shared job is keeping the representation informative.
      </p>

      <h2 id="vjepa">Does the Model &ldquo;Get&rdquo; Physics?</h2>

      <p>
        Training JEPA on video gives V-JEPA.<Cite id={6} /> In the lecture, LeCun runs a
        simple test: show the model two clips and watch how wrong its next-frame predictions
        are.
      </p>

      <p>
        One clip is ordinary (a ball follows a normal path). The other breaks physics (the ball
        vanishes mid-flight). Psychologists use the same idea with infants: an impossible event
        produces &ldquo;surprise.&rdquo; Here the readout is prediction error. On normal video,
        error stays low. On the impossible clip, it spikes at the break — then settles as the
        scene becomes predictable again.<Cite id={1} /> Nobody coded a gravity rule into the
        model. That reaction came from unsupervised training on video.
      </p>

      <ChartFigure
        title="Figure 2. V-JEPA reacts to impossible physics"
        caption="Illustrative: prediction error stays flat on normal video. On a clip where physics breaks (e.g. a ball disappearing), error jumps at that moment. The spike is the model's 'surprise' — analogous to infant looking-time experiments, with no explicit physics built in."
        source="LeCun, ETH Zürich lecture, timestamp 00:52:03; Bardes et al., V-JEPA (2024)"
        sourceRef={[1, 6]}
        sourceUrl="https://arxiv.org/abs/2404.00571"
      >
        <VJEPAErrorChart />
      </ChartFigure>

      <p>
        From a single frame, the same representations can also support depth estimates and
        object segmentation without labeled supervision for those tasks.<Cite id={1} />
      </p>

      <h2 id="meta-break">The Break with Meta</h2>

      <p>
        LeCun spent 12 years at Meta: five founding FAIR, then seven as chief AI scientist. Much
        of the company&rsquo;s modern AI stack, including work that fed into Llama, ran through
        groups he built or influenced.<Cite id={7} /><Cite id={10} /> In November 2025 he left.
      </p>

      <p>
        The disagreement was about direction. After ChatGPT, Meta put heavy money behind large
        language models, open-sourced Llama, and stood up Meta Superintelligence Labs under
        former Scale AI CEO Alexandr Wang.<Cite id={11} /><Cite id={12} /> The company was
        optimizing for chatbot-scale competition.
      </p>

      <p>
        LeCun had been saying in public that LLMs were crowding out other research. In Brooklyn,
        months earlier, he called them systems that &ldquo;are sucking the air out of the room
        anywhere they go,&rdquo; useful but not a route to human-level intelligence.<Cite id={12} />{" "}
        At ETH he repeated that most of Silicon Valley was stuck on that path, and that his
        view made him unpopular there.<Cite id={1} />
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
        I-JEPA and V-JEPA came out of Meta while he was there.<Cite id={5} /><Cite id={6} /> FAIR
        incubated the research. Product priority still moved toward Llama.
      </p>

      <p>
        Publicly the exit was polite. LeCun said Meta would stay involved as a partner;
        Zuckerberg credited him with foundational work.<Cite id={10} /> Then Meta kept scaling
        LLMs under Superintelligence Labs, and LeCun incorporated AMI Labs in Paris weeks
        later.<Cite id={3} /><Cite id={2} />
      </p>

      <h2 id="ami-labs">AMI Labs: The Company</h2>

      <p>
        At the end of the ETH talk he put a name on the project: Advanced Machine Intelligence
        Labs.<Cite id={1} /><Cite id={2} /> He wants systems for robots, plants, and clinical
        settings. Places where a chatbot that only predicts text does not help.<Cite id={1} />
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
        caption="Single-round raises in USD billions. AMI Labs: $1.03B seed (Mar 2026). Thinking Machines: $2B seed (Jul 2025). SSI (Safe Superintelligence): $2B (2025). World Labs: $1B Series B (Feb 2026). Anthropic: $3.5B Series E (Mar 2025), shown for scale."
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
        Four of the six people named below came out of Meta. The others bring domain product
        experience and an Asia research base.
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
        LeBrun already runs Nabla, the clinical documentation partner. That gives AMI a place
        to try the tech with doctors before any standalone product ships. In the Q&amp;A, LeCun
        said constraints like &ldquo;don&rsquo;t hit the wall&rdquo; can be taught with a small
        head on top of a frozen world model, without retraining the whole stack.<Cite id={1} />
      </p>

      <h2 id="competitive">Competitive Position</h2>

      <div className="my-8 border border-stone-200 bg-stone-50 px-5 py-5">
        <p className="font-serif text-lg font-bold text-stone-900">
          Try not to confuse these
        </p>
        <p className="mt-1 text-sm text-stone-500">
          &ldquo;World Labs&rdquo; and &ldquo;world models&rdquo; sound alike. They are not the
          same thing.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="border-t border-stone-300 pt-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              A company
            </p>
            <p className="mt-2 font-serif text-base font-bold text-stone-900">World Labs</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Fei-Fei Li&rsquo;s startup. Builds spatial and video AI to generate and navigate
              3D scenes.<Cite id={14} />
            </p>
          </div>
          <div className="border-t border-stone-300 pt-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              A technical idea
            </p>
            <p className="mt-2 font-serif text-base font-bold text-stone-900">World models</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              LeCun&rsquo;s term for an internal predictor of how the world changes when you
              act. AMI Labs is building this with JEPA — not a video generator.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-stone-500">
          World Labs is not shipping LeCun&rsquo;s JEPA stack.
        </p>
      </div>

      <p>
        Most of the capital in frontier AI still funds chatbots. World Labs (the company) raised
        for spatial generation. AMI raised on JEPA and a long product clock.
      </p>

      <p>
        Figure 4 picks one public company for each camp and uses disclosed funding numbers
        only: Anthropic for LLMs, World Labs for spatial AI, AMI for JEPA. Stage and round
        type differ, so treat it as a capital map, not a valuation tournament.
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
        Even with those caveats, the gap is hard to miss. Anthropic already ships. World Labs
        has funding and a build-out ahead. AMI has a large seed and a thesis, and no product
        yet.
      </p>

      <h2 id="takeaway">What to Watch</h2>

      <p>
        LeCun closed the lecture by telling researchers to stop concentrating on chatbots,
        pixel generators, and reinforcement learning. He called RL &ldquo;horribly
        sample-inefficient.&rdquo;<Cite id={1} /> Whether markets agree will show up in the
        next couple of years. A few concrete markers:
      </p>

      <ol>
        <li>
          <strong>Hiring.</strong> Four Meta alumni in the founding circle is a start. If that
          pipeline dries up, the thesis gets harder to staff.
        </li>
        <li>
          <strong>Nabla.</strong> A working clinical deployment would give outside buyers
          something to test against LLM wrappers, instead of another research video.
        </li>
        <li>
          <strong>LLM progress.</strong> AMI&rsquo;s price assumes text scaling slows. If
          frontier chatbots keep jumping through 2028 without a new architecture, a five-year
          research timeline looks expensive.
        </li>
      </ol>

      <p>
        Crunchbase-style tags will still call AMI an AI research startup. At $3.5 billion with
        no product, the investment case is narrower: either LeCun is right that the industry
        overbought next-token prediction, or a lot of seed capital is sitting on a long, risky
        clock.
      </p>

      <References items={REFERENCES} />
    </div>
  );
}
