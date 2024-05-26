-- CreateTable
CREATE TABLE "Gestante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "Gestante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DadosEvolutivos" (
    "id" SERIAL NOT NULL,
    "gestanteId" INTEGER NOT NULL,
    "municipio" TEXT NOT NULL,
    "diagnostico_desnutricao" TEXT NOT NULL,
    "energia_eletrica_domicilio" BOOLEAN NOT NULL,
    "escolaridade" INTEGER NOT NULL,
    "tipo_moradia" INTEGER NOT NULL,
    "moradia_rede_esgoto" BOOLEAN NOT NULL,
    "renda_familiar" DOUBLE PRECISION NOT NULL,
    "tratamento_agua" BOOLEAN NOT NULL,
    "amamentacao" BOOLEAN NOT NULL,
    "chefe_familia" BOOLEAN NOT NULL,
    "data_ultima_amamentacao" TIMESTAMP(3),
    "em_risco" BOOLEAN NOT NULL,
    "estado_civil" INTEGER NOT NULL,
    "quantidade_abortos" INTEGER NOT NULL,
    "quantidade_filhos_vivos" INTEGER NOT NULL,
    "quantidade_gemelares" INTEGER NOT NULL,
    "quantidade_gestacao" INTEGER NOT NULL,
    "quantidade_nascidos_mortos" INTEGER NOT NULL,
    "quantidade_nascidos_vivos" INTEGER NOT NULL,
    "quantidade_obitos_semanal" INTEGER NOT NULL,
    "quantidade_obitos_apos_semanal" INTEGER NOT NULL,
    "quantidade_partos" INTEGER NOT NULL,
    "quantidade_partos_cesarios" INTEGER NOT NULL,
    "quantidade_partos_vaginais" INTEGER NOT NULL,
    "quantidade_rn_peso2500_4000" INTEGER NOT NULL,
    "quantidade_rn_peso_maior4000" INTEGER NOT NULL,
    "quantidade_rn_peso_menor2500" INTEGER NOT NULL,
    "hipertensao" BOOLEAN NOT NULL,
    "diabetes" BOOLEAN NOT NULL,
    "cirurgia_pelvica" BOOLEAN NOT NULL,
    "infeccao_urinaria" BOOLEAN NOT NULL,
    "ma_formacao_congenita" BOOLEAN NOT NULL,
    "contato" TEXT NOT NULL,
    "contato_emergencia" TEXT NOT NULL,
    "data_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DadosEvolutivos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gestacao" (
    "id" SERIAL NOT NULL,
    "gestanteId" INTEGER NOT NULL,
    "consumo_alcool" BOOLEAN NOT NULL,
    "frequencia_uso_alcool" INTEGER NOT NULL,
    "data_ultima_menstruacao" TIMESTAMP(3) NOT NULL,
    "data_inicio_gestacao" TIMESTAMP(3) NOT NULL,
    "fator_rh" INTEGER NOT NULL,
    "fuma" BOOLEAN NOT NULL,
    "quantidade_cigarros_dia" INTEGER NOT NULL,
    "uso_drogas" INTEGER NOT NULL,
    "gravidez_planejada" BOOLEAN NOT NULL,
    "grupo_sanguineo" INTEGER NOT NULL,
    "peso_antes_gestacao" DOUBLE PRECISION NOT NULL,
    "risco_gestacional" INTEGER NOT NULL,
    "vacina_hepatite_b" BOOLEAN NOT NULL,
    "situacao_gestacional" INTEGER NOT NULL,

    CONSTRAINT "Gestacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acompanhamento" (
    "id" SERIAL NOT NULL,
    "gestacaoId" INTEGER NOT NULL,
    "data_acompanhamento" TIMESTAMP(3) NOT NULL,
    "realizado_por" TEXT NOT NULL,
    "peso_atual" DOUBLE PRECISION NOT NULL,
    "idade_gestacional" INTEGER NOT NULL,
    "pressao_arterial" TEXT NOT NULL,
    "batimentos_cardiacos" INTEGER,
    "altura_uterina" INTEGER,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Acompanhamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exame" (
    "id" SERIAL NOT NULL,
    "acompanhamentoId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "observacao" TEXT,
    "gestacaoId" INTEGER,

    CONSTRAINT "Exame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gestante_cpf_key" ON "Gestante"("cpf");

-- AddForeignKey
ALTER TABLE "DadosEvolutivos" ADD CONSTRAINT "DadosEvolutivos_gestanteId_fkey" FOREIGN KEY ("gestanteId") REFERENCES "Gestante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gestacao" ADD CONSTRAINT "Gestacao_gestanteId_fkey" FOREIGN KEY ("gestanteId") REFERENCES "Gestante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acompanhamento" ADD CONSTRAINT "Acompanhamento_gestacaoId_fkey" FOREIGN KEY ("gestacaoId") REFERENCES "Gestacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exame" ADD CONSTRAINT "Exame_acompanhamentoId_fkey" FOREIGN KEY ("acompanhamentoId") REFERENCES "Acompanhamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exame" ADD CONSTRAINT "Exame_gestacaoId_fkey" FOREIGN KEY ("gestacaoId") REFERENCES "Gestacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
