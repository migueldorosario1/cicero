#!/usr/bin/env python3
import json
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DEP_EST_JSON = PROJECT_ROOT / "src" / "data" / "deputados_estaduais_eleitos_ce_2022.json"
DEP_FED_JSON = PROJECT_ROOT / "src" / "data" / "deputados_federais_eleitos_ce_2022.json"
SEN_JSON = PROJECT_ROOT / "src" / "data" / "senadores_eleitos_ce_2022.json"
OUTPUT_JSON = PROJECT_ROOT / "src" / "data" / "parlamentares_ce.json"

def main():
    with open(DEP_EST_JSON, "r", encoding="utf-8") as f:
        est_data = json.load(f)
    with open(DEP_FED_JSON, "r", encoding="utf-8") as f:
        fed_data = json.load(f)
    with open(SEN_JSON, "r", encoding="utf-8") as f:
        sen_data = json.load(f)

    # 1. State Deputies
    deputados_estaduais = []
    for dep in est_data["deputados"]:
        deputados_estaduais.append({
            "nome": dep["nome"],
            "slug": dep["slug"],
            "partido": dep["partido"],
            "urlOficial": f"https://www.alece.ce.gov.br/index.php/parlamentares/deputados"
        })

    # 2. Federal Deputies
    deputados_federais = []
    for dep in fed_data["deputadosFederais"]:
        deputados_federais.append({
            "nome": dep["nome"],
            "slug": dep["slug"],
            "partido": dep["partido"],
            "urlOficial": f"https://www.camara.leg.br/deputados/quem-sao"
        })

    # 3. Senators (Adding Camilo Santana, Cid Gomes, and Eduardo Girão)
    senadores = [
        {
            "nome": "Cid Gomes",
            "slug": "cid-gomes",
            "partido": "PSB",
            "urlOficial": "https://www25.senado.leg.br/web/senadores/senador/-/perfil/5012"
        },
        {
            "nome": "Eduardo Girão",
            "slug": "eduardo-girao",
            "partido": "NOVO",
            "urlOficial": "https://www25.senado.leg.br/web/senadores/senador/-/perfil/5892"
        },
        {
            "nome": "Camilo Santana",
            "slug": "camilo",
            "partido": "PT",
            "urlOficial": "https://www25.senado.leg.br/web/senadores/senador/-/perfil/6166"
        }
    ]

    payload = {
        "schemaVersion": "v1",
        "updated": "2026-06-08",
        "sources": {
            "deputadosEstaduais": "https://www.alece.ce.gov.br",
            "deputadosFederais": "https://www.camara.leg.br",
            "senadores": "https://www.senado.leg.br"
        },
        "totais": {
            "deputadosEstaduais": len(deputados_estaduais),
            "deputadosFederais": len(deputados_federais),
            "senadores": len(senadores)
        },
        "deputadosEstaduais": deputados_estaduais,
        "deputadosFederais": deputados_federais,
        "senadores": senadores
    }

    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
    print("parlamentares_ce.json consolidado com sucesso!")

if __name__ == "__main__":
    main()
