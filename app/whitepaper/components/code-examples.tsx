import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CodeExamples() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Implementation Examples</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="rewards">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="nft">NFT Updates</TabsTrigger>
          </TabsList>
          <TabsContent value="rewards" className="space-y-4">
            <div className="rounded-lg bg-zinc-950 p-4">
              <pre className="text-sm text-white">
                <code>{`// Parallel reward distribution
async function distributeRewards(
  actions: SustainabilityAction[]
) {
  const batch = actions.map(action => ({
    type: "REWARD_DISTRIBUTION",
    data: {
      userId: action.userId,
      amount: calculateReward(action),
      timestamp: action.timestamp
    }
  }));

  // Process all rewards in parallel
  await ReactVM.executeBatch(batch);
}`}</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="verification" className="space-y-4">
            <div className="rounded-lg bg-zinc-950 p-4">
              <pre className="text-sm text-white">
                <code>{`// Sustainability action verification
async function verifyAction(
  imageData: Buffer,
  userId: string
) {
  const result = await ReactVM.execute({
    type: "VERIFICATION",
    data: {
      image: imageData,
      userId,
      modelId: "azure-vision-v1",
      minConfidence: 0.85
    }
  });

  if (result.verified) {
    await triggerReward(userId, result.actionType);
  }
}`}</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="nft" className="space-y-4">
            <div className="rounded-lg bg-zinc-950 p-4">
              <pre className="text-sm text-white">
                <code>{`// Dynamic NFT updates
const NFTEvolution = {
  async evolveNFT(
    tokenId: number, 
    achievements: Achievement[]
  ) {
    const newAttributes = 
      calculateNewAttributes(achievements);
    
    await ReactVM.execute({
      type: "NFT_UPDATE",
      data: {
        tokenId,
        attributes: newAttributes,
        metadata: {
          image: generateNewImage(achievements),
          properties: mapAchievements(achievements)
        }
      }
    });
  }
}`}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

