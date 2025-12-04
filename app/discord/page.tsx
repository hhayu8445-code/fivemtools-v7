                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium leading-none">
                        {activeServerData.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {activeServerData.description}
                      </p>
                    </div>
                    <Link href={activeServerData.link} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Join Server
                      </Button>
                    </Link>
                  </div>
                  <Link href={DISCORD_LINKS.COMMUNITY} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700">
                      <MessageCircle className="h-4 w-4" />
                      Community Server
                    </Button>
                  </Link>
                  <Link href={DISCORD_LINKS.SUPPORT} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full gap-2">
                      <LifeBuoy className="h-4 w-4" />
                      Support Server
                    </Button>
                  </Link>
                </CardContent>